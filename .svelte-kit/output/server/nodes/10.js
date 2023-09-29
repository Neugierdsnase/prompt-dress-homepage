import * as server from '../entries/pages/(waves)/blog/_page.server.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/blog/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(waves)/blog/+page.server.ts";
export const imports = ["_app/immutable/nodes/10.09b4c668.js","_app/immutable/chunks/index.5a544235.js","_app/immutable/chunks/ContentSection.f37ff6c3.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/Image.6c66d775.js"];
export const stylesheets = ["_app/immutable/assets/10.bbabfa68.css","_app/immutable/assets/ContentSection.e85970f3.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
