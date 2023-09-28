import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { H as Header, F as Footer } from "../../chunks/Footer.js";
import { B as Button } from "../../chunks/Button.js";
import { E as Error } from "../../chunks/error.js";
const _error_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error-page.svelte-8kqrcs.svelte-8kqrcs{background:var(--color--page-background);position:relative}br.svelte-8kqrcs.svelte-8kqrcs{margin:4px 0}.container.svelte-8kqrcs.svelte-8kqrcs{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:60vh;text-align:center}.container.svelte-8kqrcs .svg-wrapper.svelte-8kqrcs{width:300px;margin-top:-60px;margin-bottom:-30px}.container.svelte-8kqrcs .svg-wrapper.svelte-8kqrcs svg{filter:drop-shadow(2px 6px 0px rgba(0, 0, 0, 0.1))}",
  map: null
};
const Error_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, { showBackground: true }, {}, {})}
<main><div class="error-page svelte-8kqrcs"><div class="container svelte-8kqrcs"><h1>Oh no!</h1>
			<div class="svg-wrapper svelte-8kqrcs">${validate_component(Error, "Error").$$render($$result, {}, {}, {})}</div>
			<p>It seems like coffee was spilled all over this page, and now it can&#39;t be displayed.</p>
			<br class="svelte-8kqrcs">
			${validate_component(Button, "Button").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Start over`;
    }
  })}</div></div></main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Error_1 as default
};
