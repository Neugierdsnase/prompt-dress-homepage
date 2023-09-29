<script lang="ts">
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import Button from '../atoms/Button.svelte';
</script>

<div class="wrapper">
	<h3>Keep up to date on the extensions development!</h3>
	<Button href="https://bit.ly/website-newsletter-signup">
		<EmailIcon slot="icon" />
		Subscribe to the newsletter
	</Button>
</div>

<style lang="scss">
	@import '$lib/scss/breakpoints.scss';

	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 35px;
		margin: 0px -100vw;
		padding: 50px 100vw;
		background-color: var(--color--post-page-background);
	}
</style>
