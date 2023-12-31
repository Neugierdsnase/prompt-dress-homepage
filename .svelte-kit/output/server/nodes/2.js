import * as server from '../entries/pages/(blog-article)/_layout.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(blog-article)/+layout.server.ts";
export const imports = ["_app/immutable/nodes/2.d4de443d.js","_app/immutable/chunks/index.335a0d9f.js","_app/immutable/chunks/Footer.d3fb46fa.js","_app/immutable/chunks/Socials.dedc6932.js","_app/immutable/chunks/ContentSection.8ac42845.js","_app/immutable/chunks/meta.b190d979.js","_app/immutable/chunks/Image.6802176c.js","_app/immutable/chunks/Button.8d5dcd23.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/download.2b3f7a12.js"];
export const stylesheets = ["_app/immutable/assets/2.43603f83.css","_app/immutable/assets/NewsletterSection.0497b92e.css","_app/immutable/assets/Footer.296dac8e.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/ContentSection.ef6e5347.css","_app/immutable/assets/Image.0954db74.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
