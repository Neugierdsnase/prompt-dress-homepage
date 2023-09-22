export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicons/android-chrome-192x192.png","favicons/android-chrome-512x512.png","favicons/apple-touch-icon.png","favicons/favicon-16x16.png","favicons/favicon-32x32.png","favicons/favicon.ico","favicons/favicon.png","favicons/safari-pinned-tab.svg","favicons/site.webmanifest","images/features/extensible.jpg","images/features/light-dark.jpg","images/features/markdown.jpg","images/features/open-source.jpg","images/features/optimized.jpg","images/features/themeable.jpg","images/posts/blog-posts.jpg","images/posts/customization.jpg","images/posts/frontmatter-preview-dashboard.png","images/posts/frontmatter-preview-edit.png","images/posts/project-structure.jpg","images/sample-image.png","images/site-preview.png","images/site-screenshot.png","images/social-proof/andi.jpg","images/social-proof/chatgpt.png","images/social-proof/gosha.jpg","images/social-proof/matthew.jpg","images/social-proof/sasha.jpg"]),
	mimeTypes: {".png":"image/png",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.b859b8b3.js","app":"_app/immutable/entry/app.504d46bb.js","imports":["_app/immutable/entry/start.b859b8b3.js","_app/immutable/chunks/index.3978d761.js","_app/immutable/chunks/index.d4208d5a.js","_app/immutable/entry/app.504d46bb.js","_app/immutable/chunks/index.3978d761.js"],"stylesheets":[],"fonts":[]},
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
			__memo(() => import('./nodes/9.js'))
		],
		routes: [
			{
				id: "/(waves)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/(waves)/404",
				pattern: /^\/404\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 8 },
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
				page: { layouts: [0,3,], errors: [1,,], leaf: 9 },
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
				id: "/(blog-article)/project-structure",
				pattern: /^\/project-structure\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/rss.xml/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();