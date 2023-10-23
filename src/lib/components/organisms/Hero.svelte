<script lang="ts">
	import DownloadIcon from '$lib/icons/download.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import { detect } from 'detect-browser';
	import ExternalLink from '$lib/icons/external-link.svelte';

	const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
	const browser = detect();

	const isChrome = browser?.name === 'chrome';
	const isFirefox = browser?.name === 'firefox';
	const isEdge = browser?.name === 'edge';

	let offsetY = 0;
	let scale = 1;
	let opacity = 1;

	const handleScroll = () => {
		let scrollY = window.scrollY;
		opacity = scrollY > 76 ? 0 : 1;

		offsetY = clamp(-1110, -(scrollY + 1) * 1.05, 0);
		scale = clamp(0.5, 1 - scrollY / 200, 1);
	};
</script>

<svelte:window on:scroll={handleScroll} />

<section id="hero">
	<h1 class="hello" style="transform: translateY({offsetY}px) scale({scale}); opacity: {opacity}">
		Prompt Dress
	</h1>
	<p class="intro">
		<span class="center"
			>Organize your AI prompts<br />with <span class="highlight">ease</span> and
			<span class="highlight">joy.</span></span
		>
	</p>
	<div class="ctas">
		{#if isChrome}
			<Button href="https://bit.ly/website-chrome-web-store">
				<DownloadIcon slot="icon" />
				Download for Chrome
			</Button>
		{/if}
		{#if isFirefox}
			<Button href="/firefox-coming-soon">
				<DownloadIcon slot="icon" />
				It's coming soon for Firefox, stay tuned!
			</Button>
		{/if}
		{#if isEdge}
			<Button href="https://bit.ly/website-chrome-web-store">
				<DownloadIcon slot="icon" />
				Download for Edge
			</Button>
		{/if}
		<Button href="/download-extension">
			<ExternalLink slot="icon" />
			See all download options
		</Button>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		position: relative;
		padding: 80px 0;

		@include for-phone-only {
			padding: 40px 0 50px;
		}

		.hello {
			text-align: center;
		}

		.intro {
			font-weight: 500;
			font-size: 1.4rem;
			width: min(100%, 440px);
			display: flex;
			flex-direction: column;

			.center {
				text-align: center;
			}

			@include for-phone-only {
				display: none;
			}
		}

		.ctas {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: center;
			gap: 10px;
			width: 100%;
		}
	}
</style>
