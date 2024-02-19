<script lang="ts">
	import { page } from "$app/stores";
	import { metadata } from "$lib/config";

	export let title = metadata.title;
	export let description = metadata.description;
	export let type = "website";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="robots" content="follow, index" />
	<meta name="description" content={description} />
	<meta property="og:url" content={`${metadata.baseUrl}${$page.url.pathname}`} />
	<link rel="canonical" href={`${metadata.baseUrl}${$page.url.pathname}`} />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Thierry Jones" />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<!-- <meta property="og:image" content="https://thierryjones.ca/images/logo.svg"/> -->
	
</svelte:head>
