import { c as create_ssr_component, v as validate_component } from "./index.js";
const Rss = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 19C12 14.8 9.2 12 5 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19 19C19 10.6 13.4 5 5 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 19.01L5.01 18.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const RssLink_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "a.svelte-1llmev{transition:all 0.2s ease-in-out;width:24px;color:var(--color--text);fill:var(--color--text)}a.svelte-1llmev:hover{color:var(--color--primary);fill:var(--color--primary);filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const RssLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<a href="/rss.xml" target="_blank" rel="noopener noreferrer" title="Subscribe to my RSS Feed" class="svelte-1llmev">${validate_component(Rss, "RssIcon").$$render($$result, {}, {}, {})}</a>`;
});
const Email = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L12 12.5L17 9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" stroke-width="1.5"></path></svg>`;
});
const Mastodon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m2004.3 228h-.57c-19.87.163-38.97 2.491-50.13 7.601-.5.213-24.58 10.78-24.58 46.99 0 7.394-.14 16.236.09 25.612.4 16.438 2 32.742 7.21 45.957 5.67 14.406 15.47 25.335 32.04 29.72 14.11 3.737 26.23 4.503 35.99 3.967h.01c18.41-1.021 28.71-6.695 28.71-6.695a6.018 6.018 0 0 0 3.16-5.558l-.56-12.178a5.984 5.984 0 0 0 -2.56-4.646 5.995 5.995 0 0 0 -5.24-.804s-11.04 3.471-23.45 3.047c-4.87-.167-9.84-.357-14.18-1.544-3.91-1.069-7.14-3.148-8.76-7.347 5.59.951 13.45 2.021 22.27 2.425 10.49.481 20.33-.592 30.33-1.785 12.37-1.477 23.76-6.688 31.4-13.091 5.8-4.865 9.47-10.509 10.5-15.801v-.001c3.23-16.623 3.05-40.428 3.04-41.319-.01-36.286-24.23-46.801-24.58-46.951-11.14-5.105-30.25-7.436-50.14-7.599zm59.9 93.58.09-.471c3.1-15.948 2.73-38.451 2.73-38.451v-.067c0-27.633-17.49-36.04-17.49-36.04-.01-.008-.03-.016-.05-.024-10.05-4.616-27.33-6.379-45.26-6.527h-.41c-17.93.148-35.2 1.911-45.25 6.527l-.06.024s-17.48 8.407-17.48 36.04c0 7.308-.15 16.047.09 25.314v.004c.36 14.96 1.64 29.826 6.37 41.852 4.27 10.836 11.49 19.221 23.95 22.519 12.65 3.349 23.51 4.066 32.26 3.585 9.61-.533 16.56-2.512 20.36-3.891l-.04-.739c-5.11 1.018-12.33 2.033-20 1.771-16.29-.559-32.69-3.029-35.34-23.016a40.2 40.2 0 0 1 -.35-5.4 6 6 0 0 1 2.3-4.719 5.998 5.998 0 0 1 5.13-1.109s12.59 3.066 28.55 3.798c9.81.45 19.01-.598 28.36-1.713 9.88-1.18 19.01-5.258 25.11-10.372 3.36-2.814 5.83-5.834 6.43-8.895zm-54.2-36.244c.68-2.603 3.99-12.807 14.27-12.807 10.68 0 10.54 12.137 10.54 12.137v34.224c0 3.311 2.69 6 6 6s6-2.689 6-6v-34.406s-.68-23.955-22.54-23.955c-10 0-16.43 5.292-20.4 10.778-4.07-5.273-10.62-10.293-20.78-10.293-6.92 0-11.53 2.138-14.68 4.857-6.67 5.747-6.86 14.826-6.81 16.949l.02.455s-.01-.161-.02-.455v-.052 36.342c0 3.311 2.69 6 6 6s6-2.689 6-6v-36.342c0-.169-.01-.338-.02-.507 0 0-.5-4.577 2.66-7.298 1.45-1.252 3.66-1.949 6.85-1.949 10.65 0 14.18 9.844 14.91 12.386v20.233c0 3.311 2.69 6 6 6s6-2.689 6-6z" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" transform="translate(-1908 -212)"></path></svg>`;
});
const Socials_svelte_svelte_type_style_lang = "";
const css = {
  code: ".socials.svelte-t4kqcq.svelte-t4kqcq{display:flex;align-items:center;gap:20px}.socials.svelte-t4kqcq a.svelte-t4kqcq{transition:all 0.2s ease-in-out;width:24px;color:var(--color--text);fill:var(--color--text)}.socials.svelte-t4kqcq a.svelte-t4kqcq:hover{color:var(--color--primary);fill:var(--color--primary);filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Socials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="socials svelte-t4kqcq"><a href="https://mstdn.social/@promptdress" target="_blank" rel="me noreferrer" title="Minor updates go on Mastodon" class="svelte-t4kqcq">${validate_component(Mastodon, "MastodonIcon").$$render($$result, {}, {}, {})}</a>
	${validate_component(RssLink, "RssLink").$$render($$result, {}, {}, {})}
	<a href="mailto:prompt-dress@vomkonstant.in" target="_blank" rel="noopener noreferrer" title="Send an email" class="svelte-t4kqcq">${validate_component(Email, "EmailIcon").$$render($$result, {}, {}, {})}</a>
</div>`;
});
export {
  RssLink as R,
  Socials as S
};