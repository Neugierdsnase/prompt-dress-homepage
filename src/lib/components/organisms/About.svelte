<script>
	import Socials from '$lib/components/molecules/Socials.svelte';
</script>

<section id="about">
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
		justify-content: space-between;
		padding-bottom: 50px;

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
