import { c as create_ssr_component, v as validate_component } from "./index.js";
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L12 12.5L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
});
const Medium = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM15 16c1.105 0 2-1.79 2-4s-.895-4-2-4-2 1.79-2 4 .895 4 2 4ZM20 16c.552 0 1-1.79 1-4s-.448-4-1-4-1 1.79-1 4 .448 4 1 4Z"></path></svg>`;
});
const Youtube = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" stroke-width="1.5" viewBox="0 0 24 24" color="currentColor"><path fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" d="m14 12-3.5 2v-4l3.5 2Z"></path><path stroke="currentColor" stroke-width="1.5" d="M2 12.707v-1.415c0-2.895 0-4.343.905-5.274.906-.932 2.332-.972 5.183-1.053C9.438 4.927 10.818 4.9 12 4.9c1.181 0 2.561.027 3.912.065 2.851.081 4.277.121 5.182 1.053.906.931.906 2.38.906 5.274v1.415c0 2.896 0 4.343-.905 5.275-.906.931-2.331.972-5.183 1.052-1.35.039-2.73.066-3.912.066-1.181 0-2.561-.027-3.912-.066-2.851-.08-4.277-.12-5.183-1.052C2 17.05 2 15.602 2 12.708Z"></path></svg>`;
});
const Socials_svelte_svelte_type_style_lang = "";
const css = {
  code: ".socials.svelte-t4kqcq.svelte-t4kqcq{display:flex;align-items:center;gap:20px}.socials.svelte-t4kqcq a.svelte-t4kqcq{transition:all 0.2s ease-in-out;width:24px;color:var(--color--text);fill:var(--color--text)}.socials.svelte-t4kqcq a.svelte-t4kqcq:hover{color:var(--color--primary);fill:var(--color--primary);filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="socials svelte-t4kqcq"><a href="https://www.youtube.com/channel/UCgE_-5ZfUR_UruSn1XrpXtw" target="_blank" rel="noopener noreferrer" title="Subscribe to my YouTube channel" class="svelte-t4kqcq">${validate_component(Youtube, "YoutubeIcon").$$render($$result, {}, {}, {})}</a>
	<a href="https://medium.com/@k8603427" target="_blank" rel="noopener noreferrer" title="All blog posts go on Medium" class="svelte-t4kqcq">${validate_component(Medium, "MediumIcon").$$render($$result, {}, {}, {})}</a>
	<a href="https://promptdress.substack.com/" target="_blank" rel="noopener noreferrer" title="Subscribe to my newsletter" class="svelte-t4kqcq">${validate_component(Email, "EmailIcon").$$render($$result, {}, {}, {})}</a>
</div>`;
});
export {
  Socials as S
};
