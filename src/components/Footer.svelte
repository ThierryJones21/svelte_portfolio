<script>
	import socials from "$lib/socials";
	import Icon from "$components/Icon.svelte";
	
</script>

<footer>
	<ul class="left">
		{#each socials as social}
			<li>
				<a target="_blank" rel="noopener noreferrer" href={social.href} title={social.name}>
					<Icon name={social.name.toLowerCase()} width="35px" height="35px" />
				</a>
				
			</li>
		{/each}
		<li>
			<a href="mailto:jones.thierry@gmail.com"><Icon name="mail" width="35px" height="35px" /></a>
		</li>
	</ul>
	<section>
		<a
			target="_blank"
			href="https://github.com/ThierryJones21/svelte_portfolio"
			title="visit my repo">Github <Icon name="github" width="25px" height="25px"></Icon> Repository for the Website</a
		>
	</section>
</footer>

<style>
	footer {
		bottom: 0;
		color: var(--color-text);
		padding: 0 0;
		font-family: var(--font-mono);
		margin: 0 auto;
		margin-top: 200px;
	}

	ul {
		position: fixed;
		bottom: 0;
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 calc((100vw - var(--max-width)) / 2);
		margin: 0;
		color: var(--color-primary);
		transition: var(--transition);
	}

	/* ul.right {
		right: 0;
	}

	ul.right > li > a {
		writing-mode: vertical-rl;
		text-orientation: mixed;
		letter-spacing: 0.07rem;
		margin-bottom: 10px;
		transform: translateX(3px);
	} */

	ul.left {
		right: 0;
	}

	ul::after {
		content: "";
		width: 1px;
		height: 25px;
		background-color: var(--color-text);
	}

	ul.left > li {
		display: inline;
		padding: 10px;
		transition: ease 300ms;
	}

	ul.left > li:hover {
		transform: scale(1.5);
	}

	a {
		text-decoration: none;
		color: var(--color-text);
		padding: 20px 20px;
		transition: var(--transition);
		border-radius: var(--border-radius);
	}

	a:hover {
		background-color: rgb(var(--color-primary-rgb), 0.5);
	}

	li > a {
		padding: 0;
	}

	li > a:hover {
		background-color: transparent;
		color: var(--color-primary);
	}

	section {
		text-align: center;
		margin-top: 20px;
	}

	@media only screen and (max-width: 1200px) {
		footer {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		ul {
			position: unset;
			flex-direction: row;
		}

		/* ul.right > li > a {
			text-orientation: initial;
			writing-mode: inherit;
		} */

		ul::after {
			display: none;
		}
	}
</style>
