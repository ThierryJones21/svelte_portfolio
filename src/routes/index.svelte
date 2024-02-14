<script context="module">
	export const prerender = true;
</script>

<script>
	import Head from "$components/Head.svelte";
  	import ItemSlider from "$components/ItemSlider.svelte";
	import { technologies, experience } from "$lib/config";

	let selectedJobIndex = 0;
	$: job = experience[selectedJobIndex];

</script>

<Head />

<section class="hero">
	<h1>Thierry Jones</h1>
	<h2>Computer Engineer, Developer</h2>
	<p> Canadian 🇨🇦 and French 🇫🇷 Engineer looking for new experience </p>
	<p>I am learning:&nbsp;&nbsp;<span><ItemSlider items={technologies} /></span></p>
	<br />
	<img src="/images/prof-pic.png"  alt="my prof pic" />
</section>

<h1 class="section-header">About Me</h1>
<section class="about">
	<a target="_blank" href="https://letterboxd.com/film/prisoners/">
		<img src="/images/about_me_prisonners.jpg"  alt="letterboxd link and img"/>
	</a>

	
	<p>
		I am a dedicated and collaborative software developer, recently graduated from Queen’s University 🇷🇴.
		
		<br />
		<br />
		I enjoy swimming, weight lifting, coding, learning, reading, watching movies and spending time with family and friends.
		<br />
		<br />

		Here is one of my favourite movies <span class="movie-wrapper">Prisonners</span>.

		<br/>
		<br/>
	</p>
</section>

<section class="experience">
	<h1 class="section-header">Work Experience</h1>
	<div class="experience-wrapper">
		<div role="tablist" class="work-tablist">
			{#each experience as job, i}
				<button
					class="styled-btn"
					on:click={() => {
						selectedJobIndex = i;
					}}
				>
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

<section class="more">
	<h1 class="section-header">Passion Projects</h1>
	<p>
		Here you can find some of the projects I have worked on, as well as many more to come in the future!
	</p>
	<p style="text-align:center">
		<a href="/projects"><button class="styled-btn">Projects</button></a>
	</p>
</section>

<style>
	section {
		min-height: 40vh;
		transition: var(--transition);
		margin-bottom: 100px;
	}

	.hero {
		min-height: calc(100vh - 104px - 104px);
		margin-top: 100px;
		letter-spacing: 0.1em;
	}

	.hero p {
		max-width: 50%;
	}
	.hero h1 {
		align-self: center;
		/* text-transform: uppercase; */
		/* font-size: calc(4vw + 4vh); */
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
		/* font-size: calc(1vw + 1vh); */
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

	.about {
		display: grid;
		grid-template-columns: 3fr 1fr;
		grid-template-areas: "about-content about-image";
		gap: 50px;
	}

	.about > p {
		grid-area: about-content;
	}

	.about > a img {
		padding: 5px;
		max-width: 100%;
		border: 0.5px var(--color-primary) solid;
		border-radius: 10%;
	}

	.about .movie-wrapper {
		
		font-size: 1.125rem;
		color: var(--color-primary);
	}

	
	.about img {
		grid-area: about-image;
	}

	.experience {
		max-width: 1200px;
	}

	.experience-wrapper {
		display: flex;
	}

	.work-tablist {
		position: relative;
		--tab-height: 42px;
	}

	.work-tablist > div {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 10;
		width: 2px;
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
		-webkit-box-align: center;
		align-items: center;
		width: 100%;
		height: var(--tab-height);
		padding: 0px 20px 2px;
		border-left: 2px solid rgba(var(--color-primary-rgb), 0.15);
		color: var(--color-primary);
		font-family: var(--font-mono);
		font-size: 0.8rem;
		text-align: left;
		white-space: nowrap;
	}

	.work-tabpanel {
		position: relative;
		width: 100%;
		margin-left: 20px;
	}

	.work-tabpanel h3 {
		margin-bottom: 2px;
		font-size: 1.2rem;
		font-weight: 600;
		line-height: 1.3;
	}

	.company {
		color: var(--color-primary);
	}

	.company a {
		display: inline-block;
		text-decoration: none;
		text-decoration-skip-ink: auto;
		position: relative;
		transition: var(--transition);
		color: var(--color-primary);
	}

	.range {
		margin-bottom: 25px;
		color: rgba(var(--color-text-rgb), 0.8);
		font-family: var(--font-mono);
		font-size: 0.8rem;
	}

	.work-tabpanel ul {
		padding: 0px;
		margin: 0px;
		list-style: none;
		font-size: 1rem;
	}

	.work-tabpanel ul li {
		position: relative;
		padding-left: 30px;
		margin-bottom: 10px;
	}

	.work-tabpanel ul li::before {
		content: "=>";
		position: absolute;
		left: 0px;
		color: var(--color-primary);
	}

	@media only screen and (max-width: 1200px) {
		.hero p {
			max-width: 100%;
		}
	}

	@media only screen and (max-width: 1200px) {
		section.about {
			display: block;
		}
		h1.section-header::after {
			width: 70%;
		}

		.about {
			grid-template-areas: "about-image about-content";
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr;
		}

		.hero img {
			display: block;
			max-width: 50%;
			margin: 50px auto;
		}

		.about img {
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

		.experience {
			max-width: 100%;
		}
	}
</style>