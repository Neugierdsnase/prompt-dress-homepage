<script lang="ts">
	import Downloads from '$lib/components/molecules/Downloads.svelte';

	const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

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
	<Downloads showOnlyUsedBrowser />
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
	}
</style>
