

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/project-structure/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/6.4bf29b72.js","_app/immutable/chunks/index.3978d761.js","_app/immutable/chunks/CodeBlock.f1d5a3c8.js"];
export const stylesheets = ["_app/immutable/assets/CodeBlock.c482c875.css"];
export const fonts = [];
