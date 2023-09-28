import { c as create_ssr_component, v as validate_component } from "./index.js";
import { I as Image } from "./Image.js";
import { R as RssLink, S as Socials } from "./Socials.js";
const Logo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".logo.svelte-r4idv2{width:fit-content;height:100%;display:flex;gap:16px;align-items:center}@media(max-width: 767px){.logo.svelte-r4idv2{gap:8px}}@media screen and (prefers-reduced-motion: no-preference){}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { animated = true } = $$props;
  if ($$props.animated === void 0 && $$bindings.animated && animated !== void 0)
    $$bindings.animated(animated);
  $$result.css.add(css$2);
  return `<div class="${["logo svelte-r4idv2", animated ? "animated" : ""].join(" ").trim()}">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: "/images/logos/icon48.png",
      alt: "Prompt Dress Logo"
    },
    {},
    {}
  )}
</div>`;
});
const ThemeToggle_svelte_svelte_type_style_lang = "";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-1gvg2a4.svelte-1gvg2a4{position:relative;padding:30px 0}@media(max-width: 767px){header.svelte-1gvg2a4.svelte-1gvg2a4{padding:20px 0}}header.has-background.svelte-1gvg2a4.svelte-1gvg2a4{background:linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%)}header.svelte-1gvg2a4 .container.svelte-1gvg2a4{display:flex;align-items:center;gap:30px}@media(max-width: 767px){header.svelte-1gvg2a4 .container .links a.svelte-1gvg2a4{display:none}}header.svelte-1gvg2a4 .logo.svelte-1gvg2a4{height:44px;flex:1}header.svelte-1gvg2a4 a.svelte-1gvg2a4{color:var(--color--text)}header.svelte-1gvg2a4 .links.svelte-1gvg2a4{display:flex;align-items:center;justify-content:flex-end;gap:30px}header.svelte-1gvg2a4 .links a.svelte-1gvg2a4{text-decoration:none}header.svelte-1gvg2a4 .links a.svelte-1gvg2a4:hover{color:var(--color--primary);filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showBackground = false } = $$props;
  if ($$props.showBackground === void 0 && $$bindings.showBackground && showBackground !== void 0)
    $$bindings.showBackground(showBackground);
  $$result.css.add(css$1);
  return `<header class="${["svelte-1gvg2a4", showBackground ? "has-background" : ""].join(" ").trim()}"><nav class="container svelte-1gvg2a4"><a class="logo svelte-1gvg2a4" href="/" aria-label="Site logo">${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}</a>
		<div class="links svelte-1gvg2a4"><a href="/blog" class="svelte-1gvg2a4">Blog</a>
			${validate_component(RssLink, "RssLink").$$render($$result, {}, {}, {})}</div></nav>
</header>`;
});
const Footer_wave = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="120" viewBox="0 0 1440 120" fill="none" style="transform: scale(-1,-1)" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="footer__wave"><path d="M0 0L48 8.875C96 17.9167 192 35.4167 288 53.3333C384 71.25 480 88.75 576 82.2083C672 75.4167 768 44.5833 864 26.6667C960 8.75 1056 4.58333 1152 11.125C1248 17.9167 1344 35.4167 1392 44.4583L1440 53.3333V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V0Z" fill="var(--body-background-color)"></path></svg>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-1qd7k2q.svelte-1qd7k2q{height:340px;width:100%;background:linear-gradient(60deg, var(--color--waves-start) 0%, var(--color--waves-end) 100%);display:grid;grid-template-rows:120px 1fr}footer.svelte-1qd7k2q .content.svelte-1qd7k2q{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:15px;font-weight:400;font-size:0.8rem;text-align:center}footer.svelte-1qd7k2q .content .credits.svelte-1qd7k2q{font-weight:400;font-size:90%;color:var(--color--text-shade)}footer.svelte-1qd7k2q .content .socials.svelte-1qd7k2q{display:flex;align-items:center;gap:20px}footer.svelte-1qd7k2q a.svelte-1qd7k2q:hover{filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="svelte-1qd7k2q"><div class="wave">${validate_component(Footer_wave, "FooterWave").$$render($$result, {}, {}, {})}</div>
	<div class="content svelte-1qd7k2q"><div class="socials svelte-1qd7k2q">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
		<div class="copyright">This website was built by <a href="https://blog.vomkonstant.in" target="_blank" rel="noopener noreferrer" class="svelte-1qd7k2q">Konstantin Kovar</a>
			based on a truly amazing template by
			<a href="https://fantinel.dev?utm_source=site-template" target="_blank" rel="noopener noreferrer" class="svelte-1qd7k2q">Matheus Fantinel</a>.
		</div>
		<div class="credits svelte-1qd7k2q">Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" class="svelte-1qd7k2q">SvelteKit</a>. Icons by
			<a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer" class="svelte-1qd7k2q">Iconoir</a>.
		</div></div>
</footer>`;
});
export {
  Footer as F,
  Header as H
};
