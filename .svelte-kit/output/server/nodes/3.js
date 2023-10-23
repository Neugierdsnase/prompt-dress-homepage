

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(waves)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.16a8d69f.js","_app/immutable/chunks/index.335a0d9f.js","_app/immutable/chunks/Footer.57f2b144.js","_app/immutable/chunks/Socials.dedc6932.js","_app/immutable/chunks/meta.b190d979.js"];
export const stylesheets = ["_app/immutable/assets/Footer.529766c4.css","_app/immutable/assets/Socials.1c0e54d1.css"];
export const fonts = [];
