

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.151c171a.js","_app/immutable/chunks/index.5a544235.js","_app/immutable/chunks/Footer.00e19bd0.js","_app/immutable/chunks/Image.6c66d775.js","_app/immutable/chunks/Socials.eedb10a2.js","_app/immutable/chunks/Button.06dbcbc4.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.ee7783b1.js"];
export const stylesheets = ["_app/immutable/assets/1.964548ea.css","_app/immutable/assets/Footer.a7cad183.css","_app/immutable/assets/Image.0954db74.css","_app/immutable/assets/Socials.7be42699.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
