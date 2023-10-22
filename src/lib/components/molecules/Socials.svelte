<script>
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import MediumIcon from '$lib/icons/socials/medium.svelte';
	import YoutubeIcon from '$lib/icons/socials/youtube.svelte';
</script>

<div class="socials">
	<a
		href="https://www.youtube.com/channel/UCgE_-5ZfUR_UruSn1XrpXtw"
		target="_blank"
		rel="noopener noreferrer"
		title="Subscribe to my YouTube channel"
	>
		<YoutubeIcon />
	</a>
	<a
		href="https://medium.com/@k8603427"
		target="_blank"
		rel="noopener noreferrer"
		title="All blog posts go on Medium"
	>
		<MediumIcon />
	</a>
	<a
		href="https://promptdress.substack.com/"
		target="_blank"
		rel="noopener noreferrer"
		title="Subscribe to my newsletter"
	>
		<EmailIcon />
	</a>
</div>

<style lang="scss">
	@import '../../scss/breakpoints.scss';
	.socials {
		display: flex;
		align-items: center;
		gap: 20px;

		a {
			transition: all 0.2s ease-in-out;
			width: 24px;
			color: var(--color--text);
			fill: var(--color--text);

			&:hover {
				color: var(--color--primary);
				fill: var(--color--primary);
				filter: drop-shadow(0px 0px 3px var(--color--primary));
			}
		}
	}
</style>
