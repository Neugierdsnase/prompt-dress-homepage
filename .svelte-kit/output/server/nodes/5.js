

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/customization/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/5.72faa1c3.js","_app/immutable/chunks/index.3978d761.js"];
export const stylesheets = [];
export const fonts = [];
