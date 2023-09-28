import { c as create_ssr_component, b as add_attribute } from "./index.js";
const Image_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1ykl0dj{width:100%;height:100%;object-fit:contain}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let fileName;
  let { src } = $$props;
  let { alt } = $$props;
  let { fullBleed = void 0 } = $$props;
  let { formats = ["avif", "webp", "png"] } = $$props;
  let { widths = void 0 } = $$props;
  function buildSrcset() {
    return widths ? widths.map((width) => `${fileName}-${width}.${formats[0]} ${width}w`).join(", ") : formats.map((format) => `${fileName}.${format}`).join(", ");
  }
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.fullBleed === void 0 && $$bindings.fullBleed && fullBleed !== void 0)
    $$bindings.fullBleed(fullBleed);
  if ($$props.formats === void 0 && $$bindings.formats && formats !== void 0)
    $$bindings.formats(formats);
  if ($$props.widths === void 0 && $$bindings.widths && widths !== void 0)
    $$bindings.widths(widths);
  $$result.css.add(css);
  fileName = src.split(".")[0];
  return `<img${add_attribute("srcset", buildSrcset(), 0)}${add_attribute("src", void 0, 0)}${add_attribute("alt", alt, 0)} loading="lazy" decoding="async" class="${["svelte-1ykl0dj", fullBleed ? "full-bleed" : ""].join(" ").trim()}">`;
});
export {
  Image as I
};
