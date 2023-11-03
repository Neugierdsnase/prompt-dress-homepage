<script lang="ts">
	import DownloadIcon from '$lib/icons/download.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import { detect } from 'detect-browser';
	import ExternalLink from '$lib/icons/external-link.svelte';

	export let showOnlyUsedBrowser = false;

	const browser = detect();

	const isChrome = browser?.name === 'chrome';
	const isFirefox = browser?.name === 'firefox';
	const isEdge = browser?.name === 'edge';
</script>

<div>
	{#if isChrome || !showOnlyUsedBrowser}
		<Button href="https://bit.ly/website-chrome-web-store">
			<DownloadIcon slot="icon" />
			Download for Chrome
		</Button>
	{/if}
	{#if isFirefox || !showOnlyUsedBrowser}
		<Button href="https://addons.mozilla.org/en-US/firefox/addon/prompt-dress/">
			<DownloadIcon slot="icon" />
			Download for Firefox
		</Button>
	{/if}
	{#if isEdge || !showOnlyUsedBrowser}
		<Button href="https://bit.ly/website-chrome-web-store">
			<DownloadIcon slot="icon" />
			Download for Edge
		</Button>
	{/if}
	{#if showOnlyUsedBrowser}
		<Button href="/download-extension">
			<ExternalLink slot="icon" />
			See all download options
		</Button>
	{/if}
</div>

<style lang="SCSS">
	div {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 100%;
	}
</style>
