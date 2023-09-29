<script lang="ts">
	import QuoteIcon from '$lib/icons/quote.svelte';
	import Image from '../atoms/Image.svelte';

	export let name: string;
	export let position: string;
	export let image: string;
	export let quote: string;
	export let as = 'article';
</script>

<svelte:element this={as} class="social-proof-card">
	<div class="quote-icon">
		<QuoteIcon />
	</div>
	<div class="image">
		<Image src={image} alt="Image of the person who gave the testimonial" />
	</div>
	<div class="content">
		<p class="quote">
			{quote}
		</p>
		<div>
			<p class="name">
				{name}
			</p>
			<p class="position">
				{@html position}
			</p>
		</div>
	</div>
</svelte:element>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.social-proof-card {
		position: relative;
		flex-shrink: 0;
		display: flex;
		gap: 20px;
		width: 400px;
		padding: 20px;
		justify-content: space-between;
		align-items: end;
		border-radius: 10px;
		background-color: var(--color--post-page-background);

		@include for-phone-only {
			width: 100%;
			margin: 0px 16px;
		}
	}

	.quote-icon {
		position: absolute;
		top: -20px;
		left: -20px;
		height: 80px;
		width: 80px;
		z-index: 1;
		opacity: 0.2;
		color: var(--color--secondary);
		filter: drop-shadow(0px 0px 3px var(--color--secondary-shade));
	}

	.image {
		flex-shrink: 0;
		flex-grow: 0;
		width: 80px;
		height: 80px;
		max-width: 80px;
		max-height: 80px;
		border-radius: 50%;
		overflow: hidden;
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 5px;
		height: 100%;
		justify-content: space-between;
	}

	.quote {
		font-size: 0.9rem;
		font-weight: 400;
	}

	.name {
		font-size: 0.8rem;
		font-weight: 700;
	}

	.position {
		font-size: 0.8rem;
		font-weight: 400;
		font-style: italic;
	}
</style>
