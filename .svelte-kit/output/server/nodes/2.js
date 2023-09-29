import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.6d8603bb.js","_app/immutable/chunks/index.5a544235.js","_app/immutable/chunks/Footer.00e19bd0.js","_app/immutable/chunks/Image.6c66d775.js","_app/immutable/chunks/Socials.eedb10a2.js","_app/immutable/chunks/ContentSection.f37ff6c3.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/meta.b190d979.js"];
export const stylesheets = ["_app/immutable/assets/2.216bb072.css","_app/immutable/assets/Footer.a7cad183.css","_app/immutable/assets/Image.0954db74.css","_app/immutable/assets/Socials.7be42699.css","_app/immutable/assets/ContentSection.e85970f3.css"];
export const fonts = [];
