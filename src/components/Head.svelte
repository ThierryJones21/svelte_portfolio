<!-- Header.svelte -->
<script>
    // Import variables
    import { page } from "$app/stores";
    import { metadata } from "$lib/config";
    // Extract values from metadata
    let { title, description, logo} = metadata;
    let type = "website";
</script>

<svelte:head>
    <!-- Set page title and metadata -->
    <title>{title}</title>
    <meta name="robots" content="follow, index" />
    <meta name="description" content={description} />
    <meta property="og:url" content={`${metadata.baseUrl}${$page.url.pathname}`} />
    <link rel="canonical" href={`${metadata.baseUrl}${$page.url.pathname}`} />
    <meta property="og:type" content={type} />
    <meta property="og:site_name" content="Thierry Jones" />
    <meta property="og:description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:image" content={logo} />
</svelte:head>

