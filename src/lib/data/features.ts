import type { FeatureType } from '$lib/utils/types';

export const Features: FeatureType[] = [
	{
		name: '<b>Free.<b/><br>No credit card required.<br>Not even an email address.',
		description:
			'All features you see on this website are free and will remain so. If you want network or enterprise features, please <a href="mailto: prompt-dress@vomkonstant.in" target="_blank" /> contact me via email</a>.',
		image: '/images/cyberpunk/coffee_small.png',
		tags: []
	},
	{
		name: '100% Compliant',
		description:
			'No data gets sent anywhere from the browser extension. Everything is saved locally on your computer.',
		image: '/images/cyberpunk/handshake_small.png',
		tags: []
	},
	{
		name: 'Multi-Step Priming and Prompting',
		description:
			'With the <b>"Shawl"</b> feature (in active development), you can prime the model in multiple steps. Making it easier to get the model to stick to a certain schema or template.',
		image: '/images/cyberpunk/shawl.png',
		tags: [{ label: 'On the way' }]
	},
	{
		name: 'Dynamic values',
		description:
			'No more manually searching for words or phrases you need to adjust for the occasion. The <b>"Corsages"</b> feature allows you to dynamically change values in the prompt before feeding it to the model.',
		image: '/images/cyberpunk/corsage.png',
		tags: []
	},
	{
		name: 'Versioning',
		description:
			"Do you want to iterate over an old version of your prompt because it stopped working, but you don't want to delete it. No problem, just use the versioning feature (actively being developed).",
		image: '/images/cyberpunk/tailor.png',
		tags: [{ label: 'Next on the Roadmap', color: 'secondary' }]
	},
	{
		name: 'Tags and Filters',
		description:
			'Organize your prompts in a straightforward manner, not more sifting through folders and text files.',
		image: '/images/cyberpunk/wip_dress.png',
		tags: [{ label: 'Coming Soon', color: 'secondary' }]
	}
];

export default Features;
