<script context="module">
	export const prerender = true;

	export const load = async ({ fetch }) => {
		const projectsResponse = await fetch("/api/projects.json");
		const projects = await projectsResponse.json();

		return {
			props: {
				projects,
			},
		};
	};
</script>

<script lang="ts">
  	import ProjectViewer from "$components/ProjectViewer.svelte";
	import type Project from "$types/Project";
    import ContactForm from "$components/ContactForm.svelte";
	
	export let projects: Project[];
	let searchQuery = "";
	
	$: filteredProjects =
		searchQuery === ""
			? projects
			: projects.filter((project) =>
					project.title.toLowerCase().includes(searchQuery.toLowerCase()),
			  );
	import Head from "$components/Head.svelte";
  	import ItemSlider from "$components/ItemSlider.svelte";
  	import MoviesTransition from "$components/MoviesTransition.svelte";
	import { technologies, experience, movies } from "$lib/config";
	let selectedJobIndex = 0;
	$: job = experience[selectedJobIndex];
</script>

<Head />

<section class="hero-experience-wrapper">
    <section class="hero">
        <h1>Thierry Jones</h1>
        <h2>Computer Engineer, Developer</h2>
        <p>I am a Queen's Computer Engineering Graduate.</p>
        <p>Skills:<span><ItemSlider items={technologies} /></span></p>
        <br />
        <img src="/images/prof-pic.png" alt="my prof pic" />
    </section>

    <section class="experience">
        <h1 class="section-header">Work Experience</h1>
        <div class="experience-wrapper">
            <div role="tablist" class="work-tablist">
                {#each experience as job, i}
                    <button class="styled-btn" on:click={() => {selectedJobIndex = i;}}>
                        <span>{job.company.name}</span>
                        <p class="range">{job.startDate}{job.endDate ? ` - ${job.endDate}` : " "}</p>
                    </button>
                {/each}
                <div style={`transform: translateY(calc(${selectedJobIndex} * var(--tab-height)));`} />
            </div>
            <div role="tabpanel" class="work-tabpanel">
                <h3>
                    <span>{job.title}</span>
                    <span class="company">
                        <p></p>
                        <a href={job.company.url} rel="noopener noreferrer" target="_blank">{job.company.name}</a>
                    </span>
                </h3>
                <!-- <p class="range">{job.startDate}{job.endDate ? ` - ${job.endDate}` : ""}</p> -->
                <div>
                    <ul>
                        {#each job.points as point}
                            <li>{point}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </section>
</section>

<div class="project-wrapper">
    <div class="header-container">
        <h1 class="section-header">Projects</h1>
    </div>
    <div class="project-grid">
        {#if filteredProjects.length}
            {#each filteredProjects as project}
                    <ProjectViewer {project} />
            {/each}
        {:else}
            <p>No projects here...</p>
        {/if}
    </div>
</div>

<!-- <section>
    <ContactForm/>
</section> -->

<style>
    section {
        min-height: 40vh;
		width: 100%;
        transition: var(--transition);
        margin-bottom: 100px;
    }

    .hero-experience-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .hero, .experience {
        flex-basis: calc(50% - 20px); /* Adjust width for two columns with spacing */
        margin-bottom: 20px;
        flex: 1 1 45%; /* Adjust width for wider sections */
        align-items: center;
    }
    
    .hero {
        letter-spacing: 0.1em;
    }

    .hero p {
        max-width: 50%;
    }

    .hero h1 {
        align-self: center;
        font-size: 2.5rem;
        line-height: 2.5rem;
    }

    .hero > img {
        padding: 5px;
        max-width: 30%;
        border: 1px var(--color-primary) solid;
        border-radius: 50%;
    }

    .hero img {
        grid-area: about-image;
    }

    .hero h2 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-weight: 400;
        color: rgba(var(--color-text-rgb), 0.6);
        font-family: var(--font-mono);
    }

    h1.section-header {
        font-size: calc(1.7vw + 1.7vh);
        display: flex;
        align-items: center;
        white-space: nowrap;
        margin-bottom: 30px;
    }

    h1.section-header::after {
        content: "";
        display: block;
        position: relative;
        margin-left: 20px;
        width: 300px;
        height: 1px;
        background-color: rgba(var(--color-text-rgb), 0.5);
    }

    .experience {
        flex-basis: 55%;
    }

    .experience-wrapper {
        display: flex;
        flex-direction: column; /* Change to column layout on smaller screens */
    }

    .experience {
        max-width: 100%; /* Ensure full width */
    }

    .experience ul {
        padding-left: 20px; /* Add left padding to the list */
    }

    .experience li {
        line-height: 1.5; /* Adjust line height as needed */
    }
    .experience h3 {
        margin-bottom: 10px; /* Adjust margin bottom to add space below the h3 */
    }

    .experience h3 .company {
        margin-top: 10px; /* Adjust margin top to add space above the company link */
    }

    .experience h3 .company a{
        color: var(--color-primary)
    }
	
	.work-tabpanel {
        margin-left: 0;
        margin-top: 25px;
        width: 100%; /* Ensure full width */
    }

    .work-tablist > div {
        position: absolute;
        top: 0px;
        left: 100px;
        z-index: 10;
        width: 100px;
        height: var(--tab-height);
        border-radius: var(--border-radius);
        background: var(--color-primary);
        transform: translateY(calc(0 * var(--tab-height)));
        transition: var(--transition);
	}

    .work-tablist > button p {
        padding-left: 15px; /* Add right padding to create space between <p> and <span> */
        font-size: 0.8rem;
        color: var(--color-primary);
        transition: var(--transition);
    }

    .work-tablist > button {
        border: none;
        border-radius: 0;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        position: relative;
        display: flex;
        align-items: center;
        
        height: var(--tab-height);
        padding: 20px 20px 20px;
        
        color: var(--color-primary-rgb);
        font-family: var(--font-mono);
        text-align: left;
        font-size: 1rem;
        font-weight: 600;
        
        width: 90%; 
        border-left: 10px;
    }

    .header-container {
        margin-bottom: 20px; 
    }

    .project-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column; /* Stack children vertically */
        align-items: center; /* Center children horizontally */
        margin-bottom: 100px;
        
    }



    .project-wrapper h1 {
        align-self: center;
        font-size: 2.5rem;
        line-height: 2.5rem;
    }

    .project-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr)); /* Adjust grid columns */
        gap: 50px;
        justify-content: space-evenly;
         /* Center the items horizontally within the grid */
    }

    @media only screen and (max-width: 1000px) {
        .project-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)); /* Set grid to a single column */
        }
    }

    /* Additional styles for larger screens */
    @media only screen and (min-width: 1000px) {
        .hero p {
            max-width: 100%;
        }

        h1.section-header::after {
            width: 70%;
        }

        .hero img {
            display: block;
            max-width: 50%;
            margin: 50px auto;
        }

        .experience-wrapper {
            display: block;
        }

        .work-tabpanel {
            margin-left: 0;
            margin-top: 25px;
        }

		.work-tablist > div {
			position: absolute;
			top: 0px;
			left: 100px;
			z-index: 10;
			width: 100px;
			height: var(--tab-height);
			border-radius: var(--border-radius);
			background: var(--color-primary);
			transform: translateY(calc(0 * var(--tab-height)));
            transition: var(--transition);
		}
        .work-tablist > button p {
            padding-left: 15px; /* Add right padding to create space between <p> and <span> */
            font-size: 0.8rem;
            color: var(--color-primary);

            transition: var(--transition);
        }

		.work-tablist > button {
			border: none;
			border-radius: 0;
			text-decoration: none;
			text-decoration-skip-ink: auto;
			position: relative;
			display: flex;
			align-items: center;
			
			height: var(--tab-height);
			padding: 20px 20px 20px;
			
			color: var(--color-primary-rgb);
			font-family: var(--font-mono);
			text-align: left;
			font-size: 1rem;
            font-weight: 600;
			
			width: 90%; 
            border-left: 10px;
   		}

        .experience {
            max-width: 100%;
        }
        .experience h3 .company a{
        color: var(--color-primary)
    }

    }
</style>
