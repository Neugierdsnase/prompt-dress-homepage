

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(blog-article)/blog-posts/_page.md.js')).default;
export const imports = ["_app/immutable/nodes/4.b43ee857.js","_app/immutable/chunks/index.3978d761.js","_app/immutable/chunks/CodeBlock.f1d5a3c8.js","_app/immutable/chunks/Image.f625935c.js"];
export const stylesheets = ["_app/immutable/assets/4.f5800320.css","_app/immutable/assets/CodeBlock.c482c875.css","_app/immutable/assets/Image.0954db74.css"];
export const fonts = [];
