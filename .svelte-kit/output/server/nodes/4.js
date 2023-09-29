

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/blog-posts/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/4.bfd54209.js","_app/immutable/chunks/index.5a544235.js","_app/immutable/chunks/CodeBlock.435dd7c2.js","_app/immutable/chunks/Image.6c66d775.js"];
export const stylesheets = ["_app/immutable/assets/4.f5800320.css","_app/immutable/assets/CodeBlock.c482c875.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
