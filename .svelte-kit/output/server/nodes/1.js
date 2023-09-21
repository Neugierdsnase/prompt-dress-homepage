

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.fc6fa786.js","_app/immutable/chunks/index.3978d761.js","_app/immutable/chunks/Footer.206b089c.js","_app/immutable/chunks/index.d4208d5a.js","_app/immutable/chunks/Socials.170c2509.js","_app/immutable/chunks/Button.32b9034c.js","_app/immutable/chunks/regex.7dfa9b23.js","_app/immutable/chunks/error.3a794884.js"];
export const stylesheets = ["_app/immutable/assets/1.e3eb7d9c.css","_app/immutable/assets/Footer.0df58c5e.css","_app/immutable/assets/Socials.7be42699.css","_app/immutable/assets/Button.b2541fdf.css"];
export const fonts = [];
