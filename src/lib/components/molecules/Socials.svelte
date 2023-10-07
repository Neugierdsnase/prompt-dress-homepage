<script>
	import EmailIcon from '$lib/icons/socials/email.svelte';
	import MastodonIcon from '$lib/icons/socials/mastodon.svelte';
	import RssLink from '../atoms/RssLink.svelte';
	import MediumIcon from '$lib/icons/socials/medium.svelte';
</script>

<div class="socials">
	<a
		href="https://medium.com/@k8603427"
		target="_blank"
		rel="noopener noreferrer"
		title="All blog posts also go on Medium"
	>
		<MediumIcon />
	</a>
	<a
		href="https://mstdn.social/@promptdress"
		target="_blank"
		rel="me noreferrer"
		title="Minor updates go on Mastodon"
	>
		<MastodonIcon />
	</a>
	<RssLink />
	<a
		href="mailto:prompt-dress@vomkonstant.in"
		target="_blank"
		rel="noopener noreferrer"
		title="Send an email"
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
