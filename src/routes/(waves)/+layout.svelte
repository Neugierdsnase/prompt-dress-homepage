<script>
	import Waves from '$lib/components/organisms/Waves.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';

	import { description, image, keywords, title, siteBaseUrl } from '$lib/data/meta';
</script>

<svelte:head>
	<link rel="“canonical”" href={siteBaseUrl} />
	<meta name="keywords" content={keywords.join(', ')} />

	<meta name="description" content={description} />
	<meta property="og:description" content={description} />

	<title>{title}</title>
	<meta property="og:title" content={title} />

	<meta property="og:image" content={image} />

	<script
		src="https://cdn.counter.dev/script.js"
		data-id="6a4de5fb-ea58-4802-8c2c-9c41d9ca7bad"
		data-utcoffset="2"
	></script>
</svelte:head>

<Waves />

<Header />

<main>
	<slot />
</main>

<Footer />
