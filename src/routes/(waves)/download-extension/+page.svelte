<script lang="ts">
	import Downloads from '$lib/components/molecules/Downloads.svelte';
</script>

<div class="container">
	<Downloads />
	<div class="text">
		<p>
			Hey! Thanks for wanting to download the extension. You can currently do so for Chrome and Edge
			(they are the same under the hood).
		</p>
		<p>
			Firefox is definitely coming soon (I'm actually a Firefox user myself), but since I'm just a
			single dude working on this, everything takes some time.
		</p>
		<p>
			If you want to get notified once it comes out the oven, subscribe to <a
				href="https://promptdressdevelopment.substack.com/">this newsletter</a
			> and the announcement will land in your inbox. Cheers!
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
