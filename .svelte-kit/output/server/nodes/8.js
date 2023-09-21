

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/404/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.5fed3b1c.js","_app/immutable/chunks/index.3978d761.js","_app/immutable/chunks/Button.32b9034c.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.3a794884.js"];
export const stylesheets = ["_app/immutable/assets/1.e3eb7d9c.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
