<script lang="ts">
	import Socials from '../molecules/Socials.svelte';

	let opacity = 0;

	const handleScroll = () => {
		const scrollY = window.scrollY;
		opacity = scrollY / 200;
	};
</script>

<svelte:window on:scroll={handleScroll} />

<header style="background-color: rgba(var(--color--card-background-rgb), {opacity};">
	<nav class="container">
		<a class="logo" href="/" aria-label="Site logo" />
		<Socials />
	</nav>
</header>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	header {
		position: sticky;
		top: 0;
		padding: 30px 0;

		@include for-phone-only {
			padding: 20px 0;
		}

		&.has-background {
			background: linear-gradient(
				60deg,
				var(--color--waves-start) 0%,
				var(--color--waves-end) 100%
			);
		}

		.container {
			display: flex;
			align-items: center;
			gap: 30px;
		}

		.logo {
			height: 44px;
			flex: 1;
		}

		a {
			color: var(--color--text);
		}
	}
</style>
