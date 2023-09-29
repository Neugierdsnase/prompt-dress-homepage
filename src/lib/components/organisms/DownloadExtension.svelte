<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import ContentSection from './ContentSection.svelte';
	import DownloadIcon from '../../icons/download.svelte';
</script>

<ContentSection>
	<div class="container">
		<h4>Ready to take your prompts to the next level?</h4>
		<p>
			Get the
			<a href="https://bit.ly/website-chrome-web-store" target="_blank" rel="noopener"
				>Prompt Dress browser extension for Chrome here and interact with AIs like a pro!
			</a>
		</p>
		<Button
			size="large"
			tag="a"
			href="https://bit.ly/website-chrome-web-store"
			target="_blank"
			rel="noopener"
		>
			<DownloadIcon slot="icon" />
			Download
		</Button>
	</div>
</ContentSection>

<style lang="scss">
	h4,
	p {
		width: 400px;
	}
	.container {
		position: relative;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem 100vw 25vh;
		margin: 0 -100vw -25vh;
		gap: 2rem;
		background: url(/images/cyberpunk/pattern3.png),
			linear-gradient(180deg, #ffffff00 0%, var(--color--post-page-background) 70%);
		background-blend-mode: luminosity;
	}
</style>
