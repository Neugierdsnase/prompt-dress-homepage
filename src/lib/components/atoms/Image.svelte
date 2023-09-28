<script lang="ts">
	import { dev } from '$app/environment';

	export let src: string;
	export let alt: string;
	export let fullBleed: boolean | undefined = undefined;

	export let formats: string[] = ['avif', 'webp', 'png'];
	export let widths: string[] | undefined = undefined;

	$: fileName = src.split('.')[0];

	function buildSrcset() {
		if (dev) return;

		return widths
			? widths.map((width) => `${fileName}-${width}.${formats[0]} ${width}w`).join(', ')
			: formats.map((format) => `${fileName}.${format}`).join(', ');
	}
</script>

<img
	srcset={buildSrcset()}
	src={dev ? src : undefined}
	{alt}
	loading="lazy"
	decoding="async"
	class:full-bleed={fullBleed}
/>

<style lang="scss">
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
</style>
