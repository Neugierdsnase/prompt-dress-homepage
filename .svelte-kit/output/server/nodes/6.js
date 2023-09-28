

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/project-structure/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/6.7bde9125.js","_app/immutable/chunks/index.5a544235.js","_app/immutable/chunks/CodeBlock.435dd7c2.js"];
export const stylesheets = ["_app/immutable/assets/CodeBlock.c482c875.css"];
export const fonts = [];
