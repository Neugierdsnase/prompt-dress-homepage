<script lang="ts">
	import Socials from '../molecules/Socials.svelte';

	let bgOpacity = 0;
	let textOpacity = 0;

	const handleScroll = () => {
		const scrollY = window.scrollY;
		textOpacity = scrollY < 76 ? 0 : 1;
		bgOpacity = scrollY / 200;
	};
</script>

<svelte:window on:scroll={handleScroll} />

<header style="background-color: rgba(var(--color--card-background-rgb), {bgOpacity};">
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo" />
		<h5 style="opacity: {textOpacity}">Prompt Dress</h5>
		<div class="socials">
			<Socials />
		</div>
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: sticky;
		top: 0;
		padding: 30px 0;
		z-index: 1000;

		@include for-phone-only {
			padding: 20px 0;
		}

		.container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 30px;
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
		}
	}
</style>
