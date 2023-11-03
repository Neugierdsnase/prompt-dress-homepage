<script lang="ts">
	import Downloads from '$lib/components/molecules/Downloads.svelte';
</script>

<div class="container">
	<Downloads />
	<div class="text">
		<p>
			Hey! Thanks for wanting to download the extension. You can currently do so for Chrome, Edge
			(they are the same under the hood) and Firefox!.
		</p>
		<p>
			I'm just a single dude working on this, so I have to be careful how to allocate my resources,
			this is why I am currently not planning to support Safari, Opera or any other browser. That
			being said, a lot of browsers have cross-compatible extensions, so you might be able to use
			either the Chrome or the Firefox version in the browser of your choice.
		</p>
		<p>
			If you want to get notified about any development updates, subscribe to <a
				href="https://promptdressdevelopment.substack.com/">this newsletter</a
			> and any announcement will land in your inbox. Cheers!
		</p>
	</div>
	<iframe
		title="Subscribe to Prompt Dress Development on Substack"
		src="https://promptdressdevelopment.substack.com/embed"
		width="100%"
		height="320"
		style="border:1px solid #EEE; background:white;"
		frameborder="0"
		scrolling="no"
	/>
</div>

<style lang="scss">
	.container {
		max-width: 600px;
		margin: 0 auto;
	}

	.text {
		margin: 20px 0;
	}

	p {
		margin: 10px 0;
	}
</style>
