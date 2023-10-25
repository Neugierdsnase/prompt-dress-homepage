import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.51c95162.js","_app/immutable/chunks/index.335a0d9f.js","_app/immutable/chunks/Downloads.512af983.js","_app/immutable/chunks/download.2b3f7a12.js","_app/immutable/chunks/Button.8d5dcd23.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Socials.dedc6932.js","_app/immutable/chunks/BlogPostCard.e34c0cc1.js","_app/immutable/chunks/ContentSection.8ac42845.js","_app/immutable/chunks/Image.6802176c.js"];
export const stylesheets = ["_app/immutable/assets/10.97e401b0.css","_app/immutable/assets/NewsletterSection.0497b92e.css","_app/immutable/assets/Downloads.9ac12743.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/BlogPostCard.040f91d9.css","_app/immutable/assets/ContentSection.ef6e5347.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
