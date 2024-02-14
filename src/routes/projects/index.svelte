

<script lang="ts">
	import Head from "$components/Head.svelte";
	import Icon from "$components/Icon.svelte";
	
</script>

<Head title="Projects" />

<h1>Projects</h1>

<label for="search">
	<input id="search" placeholder="Search by Title" type="text"  />
	<span class="search-icon">
		<Icon name="search" />
	</span>
</label>

<ul>
	
</ul>

<style>
	h1 {
		font-size: 4rem;
	}

	input {
		width: 100%;
		padding: 8px;
		border: 1px solid gray;
		border-radius: var(--border-radius);
		margin: 40px 0;
		background-color: var(--color-bg);
	}

	input::selection,
	input:active {
		border-color: var(--color-primary);
	}

	.search-icon {
		position: absolute;
		transform: translate(-30px, 48px);
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		transition: var(--transition);
	}
</style>