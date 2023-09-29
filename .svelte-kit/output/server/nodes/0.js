import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.5901fabf.js","_app/immutable/chunks/index.5a544235.js"];
export const stylesheets = ["_app/immutable/assets/0.6cde1966.css"];
export const fonts = ["_app/immutable/assets/orbitron-latin-400-normal.810602b2.woff2","_app/immutable/assets/orbitron-latin-400-normal.66a491cb.woff","_app/immutable/assets/ubuntu-mono-cyrillic-ext-400-normal.fcf55b87.woff2","_app/immutable/assets/ubuntu-mono-all-400-normal.f4a8f91f.woff","_app/immutable/assets/ubuntu-mono-cyrillic-400-normal.b958f4d0.woff2","_app/immutable/assets/ubuntu-mono-greek-ext-400-normal.8b0abaf5.woff2","_app/immutable/assets/ubuntu-mono-greek-400-normal.6799188f.woff2","_app/immutable/assets/ubuntu-mono-latin-ext-400-normal.1fe80c26.woff2","_app/immutable/assets/ubuntu-mono-latin-400-normal.b07e4ebe.woff2","_app/immutable/assets/roboto-slab-cyrillic-ext-wght-normal.87c18f4c.woff2","_app/immutable/assets/roboto-slab-cyrillic-wght-normal.94e2c375.woff2","_app/immutable/assets/roboto-slab-greek-wght-normal.ed7c8b94.woff2","_app/immutable/assets/roboto-slab-vietnamese-wght-normal.fe06db86.woff2","_app/immutable/assets/roboto-slab-latin-ext-wght-normal.a9499d2b.woff2","_app/immutable/assets/roboto-slab-latin-wght-normal.20b588b8.woff2"];
