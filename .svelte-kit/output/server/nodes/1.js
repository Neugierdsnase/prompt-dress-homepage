

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.bd969eb5.js","_app/immutable/chunks/index.335a0d9f.js","_app/immutable/chunks/Footer.57f2b144.js","_app/immutable/chunks/Socials.dedc6932.js","_app/immutable/chunks/Button.8d5dcd23.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.faa891c1.js"];
export const stylesheets = ["_app/immutable/assets/1.964548ea.css","_app/immutable/assets/Footer.529766c4.css","_app/immutable/assets/Socials.1c0e54d1.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
