import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/8.587a7ced.js","_app/immutable/chunks/index.5a544235.js","_app/immutable/chunks/Button.06dbcbc4.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Socials.eedb10a2.js","_app/immutable/chunks/Image.a200ea43.js","_app/immutable/chunks/ContentSection.f0f2c4f5.js"];
export const stylesheets = ["_app/immutable/assets/8.3153fb59.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/Socials.7be42699.css","_app/immutable/assets/Image.0954db74.css","_app/immutable/assets/ContentSection.e85970f3.css"];
export const fonts = [];
