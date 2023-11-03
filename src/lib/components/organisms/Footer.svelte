<script>
	import Socials from '$lib/components/molecules/Socials.svelte';
</script>

<footer class="cyber-razor-top">
	<div class="socials">
		<Socials />
	</div>
	<div class="copyright">
		This website was built by <a
			href="https://blog.vomkonstant.in"
			target="_blank"
			rel="noopener noreferrer">Konstantin Kovar</a
		>
		based on a truly amazing template by
		<a href="https://fantinel.dev?utm_source=prompt-dress" target="_blank" rel="noopener noreferrer"
			>Matheus Fantinel</a
		>.
	</div>
	<div class="credits">
		Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
			>SvelteKit</a
		>. Icons by
		<a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer">Iconoir</a>.
	</div>
</footer>

<style lang="scss">
	footer {
		height: 15vh;
		position: relative;
		bottom: 0;
		z-index: 1;
		padding: 20px;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		background-color: var(--color--card-background);
		font-size: 80%;

		&:before {
			background-color: var(--color--card-background);
		}

		.credits {
			font-weight: 400;
			font-size: 90%;
			color: var(--color--text-shade);
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 20px;
		}

		a {
			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
