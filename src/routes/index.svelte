

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
	import Icon from "$components/Icon.svelte";
  	import ProjectViewer from "$components/ProjectViewer.svelte";
	import type Project from "$types/Project";
	
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
        <p>I am a Recent Computer Engineering Graduate looking for new experience</p>
        <p>My Skills Include:&nbsp;&nbsp;<span><ItemSlider items={technologies} /></span></p>
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
                    </button>
                {/each}
                <div style={`transform: translateY(calc(${selectedJobIndex} * var(--tab-height)));`} />
            </div>
            <div role="tabpanel" class="work-tabpanel">
                <h3>
                    <span>{job.title}</span><span class="company">
                        <p></p>
                        <a href={job.company.url} rel="noopener noreferrer" target="_blank">@{job.company.name}</a
                        ></span
                    >
                </h3>
                <p class="range">{job.startDate}{job.endDate ? ` - ${job.endDate}` : ""}</p>
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

<section class="project-wrapper">

    <h1 class="section-header">Projects</h1>
    <!-- <label for="search">
        <input id="search" placeholder="Search by Title" type="text" />
        <span class="search-icon">
            <Icon name="search" />
        </span>
    </label> -->
    <div>

    </div>

    <ul>
        {#if filteredProjects.length}
            {#each filteredProjects as project}
                <li>
                    <ProjectViewer {project} />
                </li>
            {/each}
        {:else}
            <p>No projects here...</p>
        {/if}
    </ul>
</section>

<!-- <section class="more">
	<h1 class="section-header">Passion Projects</h1>
	<p>
		Here you can find some of the projects I have worked on, as well as many more to come in the future!
	</p>
	<p style="text-align:center">
		<a href="/projects"><button class="styled-btn">Projects</button></a>
	</p>
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
	
	.work-tabpanel {
        margin-left: 0;
        margin-top: 25px;
        width: 100%; /* Ensure full width */
    }

	.work-tablist > button {
		border: none;
		border-radius: 0;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		display: flex;
		align-items: center;
		
		height: var(--tab-height);
		padding: 0px 20px 2px;
		
		color: var(--color-primary);
		font-family: var(--font-mono);
		text-align: left;
		font-size: 0.8rem;
        text-wrap: nowrap;

		width: auto;
		border-left: 2px solid rgba(var(--color-primary-rgb), 0.15);
	}

    .project-wrapper h1 {
        align-self: center;
        font-size: 2.5rem;
        line-height: 2.5rem;
    }

    .project-wrapper input {
        width: 100%;
        padding: 8px;
        border: 1px solid gray;
        border-radius: var(--border-radius);
        margin: 40px 0;
        background-color: var(--color-bg);
    }

    .project-wrapper input::selection,
    .project-wrapper input:active {
        border-color: var(--color-primary);
    }

    .project-wrapper .search-icon {
        position: absolute;
        transform: translate(-30px, 48px);
    }

    .project-wrapper ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    .project-wrapper li {
        transition: var(--transition);
    }

    /* Additional styles for smaller screens */
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
			transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s;
		}

		.work-tablist > button {
			border: none;
			border-radius: 0;
			text-decoration: none;
			text-decoration-skip-ink: auto;
			position: relative;
			transition: var(--transition);
			display: flex;
			align-items: center;
			
			height: var(--tab-height);
			padding: 0px 20px 2px;
			
			color: var(--color-primary);
			font-family: var(--font-mono);
			text-align: left;
			font-size: 0.8rem;
			
			width: auto; /* Adjust width as needed */
            border-left: none;
   		}
		

        .experience {
            max-width: 100%;
        }

    }
</style>
