<script lang="ts">
	import type Project from "$types/Project";
	import Icon from "$components/Icon.svelte";

	export let project: Project;

	function getLinkType(link: string) {
		if (link.toLowerCase().includes("github")) {
			return "github";
		} else if (link.toLowerCase().includes("you")) {
			return "youtube";
		} else {
			return "globe";
		}
	}
</script>

<div class="wrapper">
	<div class="preview-image" style={`background-image: url(${project.image})`} />

	<div class="info">
		<ul class="links">
			<li title="links">&lt;/&gt;</li>
			{#each project.links as link}
				<li title="open link to project">
					<a href={link} target="_blank" rel="noopener noreferrer" class="icon">
						<Icon name={getLinkType(link)} width="20px" height="20px" />
					</a>
				</li>
			{/each}
		</ul>
		<h1>{project.title}</h1>

		<p>
			{project.description} <br /><br />
		</p>
		<!-- <ul class="tags">
			{#each project.technologies as technology}
				<li>
					<Tag text={technology.name} color={technology.color} href={`/tags/${technology.name}`} />
				</li>
			{/each}
		</ul> -->
	</div>
</div>

<style>
	p {
		margin: 1rem 0;
	}

	.links {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 4px;
	}

	.links li:not(:first-of-type) {
		margin-bottom: 1rem;
		transition: all ease 300ms;
	}

	.links li:hover:not(:first-of-type) {
		transform: scale(1.2);
	}

	/* tags */
	.tags {
		list-style: none;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 4px;
	}

	.icon {
		text-decoration: none;
		color: var(--color-primary);
		padding: 5px;
		margin: 8px;
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		margin: 0 auto 80px auto;
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
	}

	.wrapper .info {
		margin: 50px 0;
		width: 100%;
	}
</style>