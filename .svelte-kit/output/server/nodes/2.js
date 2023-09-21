import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.5842fea4.js","_app/immutable/chunks/index.3978d761.js","_app/immutable/chunks/Footer.206b089c.js","_app/immutable/chunks/index.d4208d5a.js","_app/immutable/chunks/Socials.170c2509.js","_app/immutable/chunks/ContentSection.1ef31c7f.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.f625935c.js","_app/immutable/chunks/meta.82364fc2.js"];
export const stylesheets = ["_app/immutable/assets/2.216bb072.css","_app/immutable/assets/Footer.0df58c5e.css","_app/immutable/assets/Socials.7be42699.css","_app/immutable/assets/ContentSection.e85970f3.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
