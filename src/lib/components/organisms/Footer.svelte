<script>
	import FooterWave from '$lib/icons/footer-wave.svelte';
	import Socials from '$lib/components/molecules/Socials.svelte';
</script>

<footer>
	<div class="wave">
		<FooterWave />
	</div>
	<div class="content">
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
			<a
				href="https://fantinel.dev?utm_source=prompt-dress"
				target="_blank"
				rel="noopener noreferrer">Matheus Fantinel</a
			>.
		</div>
		<div class="credits">
			Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer"
				>SvelteKit</a
			>. Icons by
			<a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer">Iconoir</a>.
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		position: relative;
		z-index: 1;
		height: 240px;
		width: 100%;
		display: grid;
		grid-template-rows: 120px 1fr;

		.content {
			position: absolute;
			bottom: 10px;
			left: 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 15px;
			font-weight: 400;
			font-size: 0.8rem;
			text-align: center;

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
		}

		a {
			&:hover {
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}

	.wave {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
