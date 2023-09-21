import * as server from '../entries/pages/(waves)/_page.server.ts.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/+page.server.ts";
export const imports = ["_app/immutable/nodes/7.98b34bba.js","_app/immutable/chunks/index.3978d761.js","_app/immutable/chunks/Button.32b9034c.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Socials.170c2509.js","_app/immutable/chunks/Image.f625935c.js","_app/immutable/chunks/ContentSection.1ef31c7f.js"];
export const stylesheets = ["_app/immutable/assets/7.312355f5.css","_app/immutable/assets/Button.b2541fdf.css","_app/immutable/assets/Socials.7be42699.css","_app/immutable/assets/Image.0954db74.css","_app/immutable/assets/ContentSection.e85970f3.css"];
export const fonts = [];
