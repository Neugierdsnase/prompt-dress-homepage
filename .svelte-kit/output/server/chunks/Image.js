import { c as create_ssr_component, b as add_attribute } from "./index.js";
const Image_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1ykl0dj{width:100%;height:100%;object-fit:contain}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { fullBleed = void 0 } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  $$result.css.add(css);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="lazy" decoding="async" class="${["svelte-1ykl0dj", fullBleed ? "full-bleed" : ""].join(" ").trim()}">`;
});
export {
  Image as I
};
