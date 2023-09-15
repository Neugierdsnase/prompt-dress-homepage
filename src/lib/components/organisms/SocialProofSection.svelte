<script lang="ts">
	import SocialProofCard from '$lib/components/molecules/SocialProofCard.svelte';
	import type { SocialProofType } from '$lib/utils/types';

	export let socialProofs: SocialProofType[];
</script>

{#if socialProofs && socialProofs.length}
	<section id="social-proof">
		<h2>What other people say</h2>
		<div class="quotes">
			{#each socialProofs as socialProof}
				<SocialProofCard {...socialProof} />
			{/each}
		</div>
	</section>
{/if}

<style lang="scss">
	section {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 2rem;
		align-items: center;
		margin: 5rem 0;
	}

	.quotes {
		position: relative;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		width: content-fit;
		gap: 2rem;
	}
</style>
