import { c as create_ssr_component, e as escape, b as add_attribute, j as compute_slots } from "./index.js";
const Tag_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".tag.svelte-1xh8qlg{display:flex;align-items:center;justify-content:center;gap:5px;padding:5px 15px;border-radius:10px;font-weight:500;font-size:0.85rem;width:fit-content;white-space:nowrap}.tag.primary.svelte-1xh8qlg{background-color:var(--color--primary-tint);color:var(--color--primary)}.tag.secondary.svelte-1xh8qlg{background-color:var(--color--secondary-tint);color:var(--color--secondary)}",
  map: null
};
const Tag = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "primary" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$1);
  return `<div class="${"tag " + escape(color, true) + " svelte-1xh8qlg"}">${slots.default ? slots.default({}) : ``}</div>`;
});
const ContentSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content-section.svelte-emrvls.svelte-emrvls{display:flex;align-items:center;justify-content:space-between;gap:40px;padding:50px 0}.content-section.svelte-emrvls .title-area.svelte-emrvls{flex:2;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:15px}.content-section.svelte-emrvls .title-area .text.svelte-emrvls{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:5px}.content-section.svelte-emrvls .content-area.svelte-emrvls{flex:5;display:grid;place-items:center}@media(min-width: 901px){.content-section.left.svelte-emrvls .title-area.svelte-emrvls{order:1}.content-section.left.svelte-emrvls .content-area.svelte-emrvls{order:2}.content-section.right.svelte-emrvls .title-area.svelte-emrvls{order:2}.content-section.right.svelte-emrvls .content-area.svelte-emrvls{order:1}.content-section.top.svelte-emrvls.svelte-emrvls{flex-direction:column}.content-section.top.svelte-emrvls .title-area.svelte-emrvls{order:1;max-width:600px}.content-section.top.svelte-emrvls .content-area.svelte-emrvls{order:2;width:100%}}@media(max-width: 900px){.content-section.svelte-emrvls.svelte-emrvls{flex-direction:column}}",
  map: null
};
const ContentSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { id = void 0 } = $$props;
  let { title = void 0 } = $$props;
  let { description = void 0 } = $$props;
  let { align = "top" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  $$result.css.add(css);
  return `<section${add_attribute("id", id, 0)} class="${"content-section " + escape(align, true) + " svelte-emrvls"}"><div class="title-area svelte-emrvls">${title || description ? `<div class="text svelte-emrvls">${title ? `<h2>${escape(title)}</h2>` : ``}
				${description ? `<p>${escape(description)}</p>` : ``}</div>` : ``}
		${$$slots["button"] ? `<div class="button">${slots.button ? slots.button({}) : ``}</div>` : ``}</div>
	<div class="content-area svelte-emrvls">${slots.default ? slots.default({}) : ``}</div>
</section>`;
});
export {
  ContentSection as C,
  Tag as T
};
