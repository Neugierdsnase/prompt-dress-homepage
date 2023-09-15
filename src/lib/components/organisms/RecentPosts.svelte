<script lang="ts">
	import BlogPostCard from '$lib/components/molecules/BlogPostCard.svelte';
	import ContentSection from '$lib/components/organisms/ContentSection.svelte';
	import type { BlogPostType } from '$lib/utils/types';
	import Button from '$lib/components/atoms/Button.svelte';

	export let posts: BlogPostType[];
</script>

<div class="wrapper">
	<ContentSection
		id="recent-posts"
		title="Prompt Engineering"
		description="Learn more about how to write prompts that get you the best results with these blog posts."
		align="left"
	>
		<div slot="button">
			<Button href="/blog">View More</Button>
		</div>
		<div class="grid">
			{#each posts as post}
				<BlogPostCard
					slug={post.slug}
					title={post.title}
					excerpt={post.excerpt}
					tags={post.tags}
					readingTime={post.readingTime}
					showImage={false}
				/>
			{/each}
		</div>
	</ContentSection>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.grid {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include for-phone-only {
			grid-template-columns: 1fr;
		}
	}

	.wrapper {
		margin: 0px -100vw;
		padding: 0px 100vw;
		background-color: var(--color--post-page-background);
	}
</style>
