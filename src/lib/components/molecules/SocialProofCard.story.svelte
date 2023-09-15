<script lang="ts">
	import '$lib/scss/global.scss';
	import type { Hst } from '@histoire/plugin-svelte';
	import SocialProofCard from './SocialProofCard.svelte';

	export let Hst: Hst;
</script>

<Hst.Story title="Molecules/SocialProofCard" layout={{ type: 'single', iframe: true }}>
	<SocialProofCard
		image="placeholder"
		name="Ada Lovelace"
		position="Lead Developer, Analytical Engine"
		quote="I would use it if I was still alive."
	/>
</Hst.Story>
