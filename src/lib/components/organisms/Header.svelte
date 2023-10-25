<script lang="ts">
	import Socials from '../molecules/Socials.svelte';
	const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);

	let bgOpacity = 0;
	let textOpacity = 0;
	let secondTextOpacity = 0;
	let textOffsetX = 0;

	let keyframe1 = 76;
	let keyframe2 = 330;
	let keyframe3 = 364;

	const handleScroll = () => {
		const scrollY = window.scrollY;
		textOpacity = scrollY < keyframe1 || scrollY > keyframe3 ? 0 : 1;
		secondTextOpacity = scrollY < keyframe3 ? 0 : 1;
		textOffsetX = clamp(-340, scrollY * -1.95 + keyframe2, 0);
		bgOpacity = scrollY / 200;
	};
</script>

<svelte:window on:scroll={handleScroll} />

<header
	class="cyber-razor-bottom"
	style="background-color: rgba(var(--color--card-background-rgb), {bgOpacity};"
>
	<nav class="container">
		<a class="logo" href="/" aria-label="Page Title"
			><h5 style="opacity: {secondTextOpacity}; text-align: start">Prompt Dress</h5></a
		>
		<h5 style="opacity: {textOpacity}; transform: translateX({textOffsetX}px)">Prompt Dress</h5>
		<div class="socials">
			<Socials />
		</div>
	</nav>
</header>
<div class="razor cyber-razor-bottom" style="opacity: {bgOpacity}" />

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: sticky;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 0;
		height: 80px;
		z-index: 1000;

		@include for-phone-only {
			padding: 20px 0;
			a > h5 {
				display: none;
			}
		}

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 30px;
		}

		nav {
			padding-top: 15px;
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		.socials {
			display: flex;
			justify-content: flex-end;
			flex: 1;
		}

		h5 {
			text-align: center;
			font-size: 1.5rem;
			font-weight: 800;
			color: var(--color--text);
			flex: 1;
		}

		a {
			color: var(--color--text);
			text-decoration: none;
			line-height: 1.5;
		}
	}

	.razor {
		position: sticky;
		top: 80px;
		z-index: 1000;
		&::after {
			width: 170%;
			transform: translateX(-30%);
			background-color: var(--color--card-background);
		}
	}
</style>
