import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { k as keywords, s as siteBaseUrl, d as description, t as title, i as image } from "../../../chunks/meta.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-195hicq{min-height:85vh}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-12ekxku_START --><link rel="“canonical”"${add_attribute("href", siteBaseUrl, 0)}><meta name="keywords"${add_attribute("content", keywords.join(", "), 0)}><meta name="description"${add_attribute("content", description, 0)}><meta property="og:description"${add_attribute("content", description, 0)}><meta name="twitter:description"${add_attribute("content", description, 0)}>${$$result.title = `<title>${escape(title)}</title>`, ""}<meta property="og:title"${add_attribute("content", title, 0)}><meta name="twitter:title"${add_attribute("content", title, 0)}><meta property="og:image"${add_attribute("content", image, 0)}><meta name="twitter:image"${add_attribute("content", image, 0)}><meta name="twitter:card" content="summary_large_image"><!-- HEAD_svelte-12ekxku_END -->`, ""}


${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<main class="svelte-195hicq">${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
