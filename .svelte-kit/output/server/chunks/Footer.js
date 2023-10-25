import { c as create_ssr_component, e as escape, v as validate_component } from "./index.js";
import { S as Socials } from "./Socials.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-44dze3.svelte-44dze3.svelte-44dze3{position:sticky;display:flex;justify-content:center;align-items:center;top:0;height:80px;z-index:1000}@media(max-width: 767px){header.svelte-44dze3.svelte-44dze3.svelte-44dze3{padding:20px 0}header.svelte-44dze3 a.svelte-44dze3>h5.svelte-44dze3{display:none}}header.svelte-44dze3 .container.svelte-44dze3.svelte-44dze3{display:flex;justify-content:space-between;align-items:center;gap:30px}header.svelte-44dze3 nav.svelte-44dze3.svelte-44dze3{padding-top:15px}header.svelte-44dze3 .logo.svelte-44dze3.svelte-44dze3{height:44px;flex:1}header.svelte-44dze3 .socials.svelte-44dze3.svelte-44dze3{display:flex;justify-content:flex-end;flex:1}header.svelte-44dze3 h5.svelte-44dze3.svelte-44dze3{text-align:center;font-size:1.5rem;font-weight:800;color:var(--color--text);flex:1}header.svelte-44dze3 a.svelte-44dze3.svelte-44dze3{color:var(--color--text);text-decoration:none;line-height:1.5}.razor.svelte-44dze3.svelte-44dze3.svelte-44dze3{position:sticky;top:80px;z-index:1000}.razor.svelte-44dze3.svelte-44dze3.svelte-44dze3::after{width:170%;transform:translateX(-30%);background-color:var(--color--card-background)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bgOpacity = 0;
  let textOpacity = 0;
  let secondTextOpacity = 0;
  let textOffsetX = 0;
  $$result.css.add(css$1);
  return `


<header class="cyber-razor-bottom svelte-44dze3" style="${"background-color: rgba(var(--color--card-background-rgb), " + escape(bgOpacity, true) + ";"}"><nav class="container svelte-44dze3"><a class="logo svelte-44dze3" href="/" aria-label="Page Title"><h5 style="${"opacity: " + escape(secondTextOpacity, true) + "; text-align: start"}" class="svelte-44dze3">Prompt Dress</h5></a>
		<h5 style="${"opacity: " + escape(textOpacity, true) + "; transform: translateX(" + escape(textOffsetX, true) + "px)"}" class="svelte-44dze3">Prompt Dress</h5>
		<div class="socials svelte-44dze3">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></nav></header>
<div class="razor cyber-razor-bottom svelte-44dze3" style="${"opacity: " + escape(bgOpacity, true)}"></div>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-wqqph2.svelte-wqqph2{height:15vh;position:relative;z-index:1;padding:20px;width:100%;display:flex;flex-direction:column;align-items:center;gap:20px;background-color:var(--color--card-background);font-size:80%}footer.svelte-wqqph2.svelte-wqqph2:before{background-color:var(--color--card-background)}footer.svelte-wqqph2 .credits.svelte-wqqph2{font-weight:400;font-size:90%;color:var(--color--text-shade)}footer.svelte-wqqph2 .socials.svelte-wqqph2{display:flex;align-items:center;gap:20px}footer.svelte-wqqph2 a.svelte-wqqph2:hover{filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="cyber-razor-top svelte-wqqph2"><div class="socials svelte-wqqph2">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
	<div class="copyright">This website was built by <a href="https://blog.vomkonstant.in" target="_blank" rel="noopener noreferrer" class="svelte-wqqph2">Konstantin Kovar</a>
		based on a truly amazing template by
		<a href="https://fantinel.dev?utm_source=prompt-dress" target="_blank" rel="noopener noreferrer" class="svelte-wqqph2">Matheus Fantinel</a>.
	</div>
	<div class="credits svelte-wqqph2">Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" class="svelte-wqqph2">SvelteKit</a>. Icons by
		<a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer" class="svelte-wqqph2">Iconoir</a>.
	</div>
</footer>`;
});
export {
  Footer as F,
  Header as H
};
