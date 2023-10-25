<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import About from '$lib/components/organisms/About.svelte';
	import RecentPosts from '$lib/components/organisms/RecentPosts.svelte';
	import Features from '$lib/components/organisms/Features.svelte';
	import type { FeatureType, BlogPostType, SocialProofType } from '$lib/utils/types';
	import SocialProofSection from '$lib/components/organisms/SocialProofSection.svelte';
	import NewsletterSection from '$lib/components/organisms/NewsletterSection.svelte';
	import Badges from '$lib/components/organisms/Badges.svelte';

	export let data: {
		features: FeatureType[];
		posts: BlogPostType[];
		socialProofs: SocialProofType[];
	};

	let { features, posts, socialProofs } = data;
</script>

<div class="container">
	<Hero />
	<About />
	<!-- <Badges /> -->
	<NewsletterSection />
	<Features {features} />
	{#if posts && posts.length > 0}
		<RecentPosts {posts} />
	{/if}
	<SocialProofSection {socialProofs} />
	<NewsletterSection />
</div>
