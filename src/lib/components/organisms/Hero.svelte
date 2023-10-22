<script>
	import DownloadIcon from '$lib/icons/download.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Sparkles from '../atoms/Sparkles.svelte';
</script>

<section id="hero">
	<Sparkles>
		<h1 class="hello">Prompt Dress</h1>
	</Sparkles>
	<p class="intro">
		<span class="center">Organize your AI prompts<br />with ease and joy.</span>
	</p>
	<div class="ctas">
		<Button href="https://bit.ly/website-chrome-web-store">
			<DownloadIcon slot="icon" />
			Download for Chrome
		</Button>
		<Button href="/firefox-coming-soon">
			<DownloadIcon slot="icon" />
			Download for Firefox
		</Button>
		<Button href="https://bit.ly/website-chrome-web-store">
			<DownloadIcon slot="icon" />
			Download for Edge
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
