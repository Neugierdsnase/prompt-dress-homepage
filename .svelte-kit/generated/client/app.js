export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12')
];

export const server_loads = [2];

export const dictionary = {
		"/(waves)": [~10,[3]],
		"/(waves)/404": [11,[3]],
		"/(blog-article)/blog-posts": [4,[2]],
		"/(waves)/blog": [~12,[3]],
		"/(blog-article)/customization": [5,[2]],
		"/(blog-article)/project-structure": [6,[2]],
		"/(blog-article)/prompt-engineering-basics": [7,[2]],
		"/(blog-article)/prompt-engineering-for-language-learners": [8,[2]],
		"/(blog-article)/prompt-engineering-for-real-estate-listings": [9,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';