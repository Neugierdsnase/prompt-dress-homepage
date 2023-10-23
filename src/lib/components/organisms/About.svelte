<script>
	import Socials from '$lib/components/molecules/Socials.svelte';

	let offsetY = 0;
	const handleScroll = () => {
		const scrollY = window.scrollY;
		offsetY = scrollY * 0.2;
	};
</script>

<svelte:window on:scroll={handleScroll} />

<section
	id="about"
	class="cyber-razor-top cyber-razor-bottom"
	style="transform: translateY({offsetY}px)"
>
	<div class="info">
		<h2>
			Your AI prompts are valuable.
			<span class="highlight">Cherish them.</span>
		</h2>
		<p>
			You spend a lot of time crafting AI prompts that get you just the right answers. Save them.
			Organize them neatly. Reuse them with a single click.
		</p>
		<div class="socials">
			<span>Socials:</span>
			<Socials />
		</div>
	</div>
	<div class="video">
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/O8_oTEoj15Q?si=6tRTi2TxFD0Hnac4"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	</div>
</section>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	#about {
		position: relative;
		display: flex;
		gap: 20px;
		background-color: var(--color--post-page-background);
		justify-content: space-between;
		padding: 30px 100vw;
		margin: 80px -100vw 34vh;

		&::before,
		&::after {
			background-color: var(--color--post-page-background);
		}

		@include for-phone-only {
			justify-items: center;
			gap: 20px;
			flex-direction: column;
		}

		.info {
			display: flex;
			flex-direction: column;
			flex-shrink: 1;
			gap: 10px;
			h2 {
				@include for-phone-only {
					text-align: center;
				}
			}

			.video {
				flex-shrink: 0;
			}

			p {
				@include for-phone-only {
					text-align: justify;
				}
			}

			@include for-phone-only {
				gap: 20px;
			}
		}

		.socials {
			display: flex;
			align-items: center;
			gap: 15px;

			@include for-phone-only {
				justify-content: center;
				margin-bottom: 10px;
				span {
					display: none;
				}
			}
		}
	}

	.highlight {
		color: var(--color--secondary);
	}
</style>
