import * as server from '../entries/pages/(waves)/blog/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.10e087e0.js","_app/immutable/chunks/index.5a544235.js","_app/immutable/chunks/ContentSection.f0f2c4f5.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.a200ea43.js"];
export const stylesheets = ["_app/immutable/assets/10.bbabfa68.css","_app/immutable/assets/ContentSection.e85970f3.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
