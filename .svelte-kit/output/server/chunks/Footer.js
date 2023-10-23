import { c as create_ssr_component, e as escape, v as validate_component } from "./index.js";
import { S as Socials } from "./Socials.js";
const Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-zzepj2.svelte-zzepj2.svelte-zzepj2{position:sticky;top:0;padding:30px 0;z-index:1000}@media(max-width: 767px){header.svelte-zzepj2.svelte-zzepj2.svelte-zzepj2{padding:20px 0}header.svelte-zzepj2 a.svelte-zzepj2>h5.svelte-zzepj2{display:none}}header.svelte-zzepj2 .container.svelte-zzepj2.svelte-zzepj2{display:flex;justify-content:space-between;align-items:center;gap:30px}header.svelte-zzepj2 .logo.svelte-zzepj2.svelte-zzepj2{height:44px;flex:1}header.svelte-zzepj2 .socials.svelte-zzepj2.svelte-zzepj2{display:flex;justify-content:flex-end;flex:1}header.svelte-zzepj2 h5.svelte-zzepj2.svelte-zzepj2{text-align:center;font-size:1.5rem;font-weight:800;color:var(--color--text);flex:1}header.svelte-zzepj2 a.svelte-zzepj2.svelte-zzepj2{color:var(--color--text);text-decoration:none;line-height:1.5}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let bgOpacity = 0;
  let textOpacity = 0;
  let secondTextOpacity = 0;
  let textOffsetX = 0;
  $$result.css.add(css$1);
  return `


<header class="cyber-razor-bottom svelte-zzepj2" style="${"background-color: rgba(var(--color--card-background-rgb), " + escape(bgOpacity, true) + ";"}"><nav class="container svelte-zzepj2"><a class="logo svelte-zzepj2" href="/" aria-label="Page Title"><h5 style="${"opacity: " + escape(secondTextOpacity, true) + "; text-align: start"}" class="svelte-zzepj2">Prompt Dress</h5></a>
		<h5 style="${"opacity: " + escape(textOpacity, true) + "; transform: translateX(" + escape(textOffsetX, true) + "px)"}" class="svelte-zzepj2">Prompt Dress</h5>
		<div class="socials svelte-zzepj2">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></nav>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css = {
  code: "footer.svelte-224npr.svelte-224npr{position:relative;z-index:1;padding:30px;width:100%;display:flex;flex-direction:column;align-items:center;gap:20px;background-color:var(--color--card-background);font-size:80%}footer.svelte-224npr.svelte-224npr:before{background-color:var(--color--card-background)}footer.svelte-224npr .credits.svelte-224npr{font-weight:400;font-size:90%;color:var(--color--text-shade)}footer.svelte-224npr .socials.svelte-224npr{display:flex;align-items:center;gap:20px}footer.svelte-224npr a.svelte-224npr:hover{filter:drop-shadow(0px 0px 3px var(--color--primary))}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<footer class="cyber-razor-top svelte-224npr"><div class="socials svelte-224npr">${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div>
	<div class="copyright">This website was built by <a href="https://blog.vomkonstant.in" target="_blank" rel="noopener noreferrer" class="svelte-224npr">Konstantin Kovar</a>
		based on a truly amazing template by
		<a href="https://fantinel.dev?utm_source=prompt-dress" target="_blank" rel="noopener noreferrer" class="svelte-224npr">Matheus Fantinel</a>.
	</div>
	<div class="credits svelte-224npr">Powered by <a href="https://kit.svelte.dev/" target="_blank" rel="noopener noreferrer" class="svelte-224npr">SvelteKit</a>. Icons by
		<a href="https://iconoir.com/" target="_blank" rel="noopener noreferrer" class="svelte-224npr">Iconoir</a>.
	</div>
</footer>`;
});
export {
  Footer as F,
  Header as H
};
