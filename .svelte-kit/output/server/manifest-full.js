export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicons/icon128.png","favicons/icon48.png","favicons/site.webmanifest","images/cyberpunk/cable_dress.avif","images/cyberpunk/cable_dress.png","images/cyberpunk/cable_dress.webp","images/cyberpunk/coffee_large.avif","images/cyberpunk/coffee_large.png","images/cyberpunk/coffee_large.webp","images/cyberpunk/coffee_small.avif","images/cyberpunk/coffee_small.png","images/cyberpunk/coffee_small.webp","images/cyberpunk/conversation.png","images/cyberpunk/corsage.avif","images/cyberpunk/corsage.png","images/cyberpunk/corsage.webp","images/cyberpunk/dress_with_shawl.avif","images/cyberpunk/dress_with_shawl.png","images/cyberpunk/dress_with_shawl.webp","images/cyberpunk/handshake_large.avif","images/cyberpunk/handshake_large.png","images/cyberpunk/handshake_large.webp","images/cyberpunk/handshake_small.avif","images/cyberpunk/handshake_small.png","images/cyberpunk/handshake_small.webp","images/cyberpunk/pattern1.avif","images/cyberpunk/pattern1.png","images/cyberpunk/pattern1.webp","images/cyberpunk/pattern2.avif","images/cyberpunk/pattern2.png","images/cyberpunk/pattern2.webp","images/cyberpunk/pattern3.avif","images/cyberpunk/pattern3.png","images/cyberpunk/pattern3.webp","images/cyberpunk/pattern4.avif","images/cyberpunk/pattern4.png","images/cyberpunk/pattern4.webp","images/cyberpunk/real-estate.png","images/cyberpunk/shawl.avif","images/cyberpunk/shawl.png","images/cyberpunk/shawl.webp","images/cyberpunk/tailor.avif","images/cyberpunk/tailor.png","images/cyberpunk/tailor.webp","images/cyberpunk/wip_dress.avif","images/cyberpunk/wip_dress.png","images/cyberpunk/wip_dress.webp","images/cyberpunk/wip_dress2.avif","images/cyberpunk/wip_dress2.png","images/cyberpunk/wip_dress2.webp","images/features/extensible.avif","images/features/extensible.jpg","images/features/extensible.webp","images/features/light-dark.avif","images/features/light-dark.jpg","images/features/light-dark.webp","images/features/markdown.avif","images/features/markdown.jpg","images/features/markdown.webp","images/features/open-source.avif","images/features/open-source.jpg","images/features/open-source.webp","images/features/optimized.avif","images/features/optimized.jpg","images/features/optimized.webp","images/features/themeable.avif","images/features/themeable.jpg","images/features/themeable.webp","images/logos/icon128.avif","images/logos/icon128.png","images/logos/icon128.webp","images/logos/icon16.avif","images/logos/icon16.png","images/logos/icon16.webp","images/logos/icon48.avif","images/logos/icon48.png","images/logos/icon48.webp","images/logos/logo_large.avif","images/logos/logo_large.png","images/logos/logo_large.webp","images/posts/blog-posts.avif","images/posts/blog-posts.jpg","images/posts/blog-posts.webp","images/posts/customization.avif","images/posts/customization.jpg","images/posts/customization.webp","images/posts/frontmatter-preview-dashboard.avif","images/posts/frontmatter-preview-dashboard.png","images/posts/frontmatter-preview-dashboard.webp","images/posts/frontmatter-preview-edit.avif","images/posts/frontmatter-preview-edit.png","images/posts/frontmatter-preview-edit.webp","images/posts/project-structure.avif","images/posts/project-structure.jpg","images/posts/project-structure.webp","images/sample-image.avif","images/sample-image.png","images/sample-image.webp","images/site-preview.avif","images/site-preview.png","images/site-preview.webp","images/site-screenshot.avif","images/site-screenshot.png","images/site-screenshot.webp","images/social-proof/andi.avif","images/social-proof/andi.jpg","images/social-proof/andi.webp","images/social-proof/chatgpt.avif","images/social-proof/chatgpt.png","images/social-proof/chatgpt.webp","images/social-proof/gosha.avif","images/social-proof/gosha.jpg","images/social-proof/gosha.webp","images/social-proof/matthew.avif","images/social-proof/matthew.jpg","images/social-proof/matthew.webp","images/social-proof/sasha.avif","images/social-proof/sasha.jpg","images/social-proof/sasha.webp"]),
	mimeTypes: {".png":"image/png",".webmanifest":"application/manifest+json",".avif":"image/avif",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.fc923280.js","app":"_app/immutable/entry/app.6c7509c3.js","imports":["_app/immutable/entry/start.fc923280.js","_app/immutable/chunks/index.335a0d9f.js","_app/immutable/entry/app.6c7509c3.js","_app/immutable/chunks/index.335a0d9f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js'))
		],
		routes: [
			{
				id: "/(waves)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/(waves)/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/(blog-article)/blog-posts",
				pattern: /^\/blog-posts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/(waves)/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/(blog-article)/customization",
				pattern: /^\/customization\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/(waves)/download-extension",
				pattern: /^\/download-extension\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/(waves)/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/(blog-article)/project-structure",
				pattern: /^\/project-structure\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/(blog-article)/prompt-engineering-basics",
				pattern: /^\/prompt-engineering-basics\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(blog-article)/prompt-engineering-for-language-learners",
				pattern: /^\/prompt-engineering-for-language-learners\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/(blog-article)/prompt-engineering-for-real-estate-listings",
				pattern: /^\/prompt-engineering-for-real-estate-listings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/rss.xml/_server.ts.js'))
			},
			{
				id: "/(waves)/support",
				pattern: /^\/support\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 15 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
