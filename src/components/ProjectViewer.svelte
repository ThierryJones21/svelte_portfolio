<script lang="ts">
	import type Project from "$types/Project";
	export let project: Project;

</script>

<div class="wrapper">
	<div class="preview-image" style={`background-image: url(${project.image})`} />
		<div class="info">
			<ul class="links">
				<li title="links"></li>
				{#each project.links as [name, link],i}
					<li title="open link to project">
						<a href={link} target="_blank" rel="noopener noreferrer" class="icon">
							{name}
						</a>
					</li>
				{/each}
			</ul>
			<h1>{project.title} - {project.date}</h1>
			<p>
				{project.description} 
			</p>
		</div>
</div>

<style>
	p {
		margin: 1rem 0;
		line-height: 1.5; /* Adjust the line height as needed */
	}

	.links {
		margin-top: 30px;
		margin-left: -50px;
		margin-bottom: 2vw;
		list-style: none;
		justify-content: flex-start; 
		display: flex; 
	}

	.links li:not(:first-of-type) {
		align-items: center;
		transition: var(--transition);
	}

	.links li:hover:not(:first-of-type) {
		align-items: center;
		transform: scale(1.2);
	}

	.icon {
		cursor: pointer;
		background: none;
		border-style: solid;
		border-width: 2px;
		font-weight: 500;
		letter-spacing: 0.07rem;
		padding: 10px 20px;
		border-radius: var(--border-radius);
		color: var(--color-primary);
		border-color: var(--color-primary);
		transition: var(--transition);

		margin-bottom: 1rem;
		text-decoration: none;
		color: var(--color-primary);
		margin: 8px;
	}

	.wrapper {
		max-width: fit-content;
		display: flex;
		justify-content: space-between;
		margin: 0 auto 40px auto;
		min-height: 300px;
		height: fit-content;
		text-decoration: none;
		color: var(--color-text);
		flex-direction: column;
	}

	.wrapper .preview-image {
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100%;
		min-height: 300px;
		max-height: 30vh;
		margin: 0;
		border-radius: 2%;
	}

	.wrapper .info {
		margin: 10px 0;
		width: 100%;
	}
</style>