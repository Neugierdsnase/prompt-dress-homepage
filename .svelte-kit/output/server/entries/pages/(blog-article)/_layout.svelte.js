import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape, d as each } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { C as ContentSection, T as Tag } from "../../../chunks/ContentSection.js";
import dateformat from "dateformat";
import { k as keywords, s as siteBaseUrl, t as title } from "../../../chunks/meta.js";
import { I as Image } from "../../../chunks/Image.js";
import { D as Download } from "../../../chunks/download.js";
import { B as Button } from "../../../chunks/Button.js";
const DownloadExtension_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h4.svelte-13pccfr,p.svelte-13pccfr{width:400px}.container.svelte-13pccfr{position:relative;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 100vw 25vh;margin:0 -100vw -25vh;gap:2rem;background:url(/images/cyberpunk/pattern3.png), linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, var(--color--post-page-background) 70%);background-blend-mode:luminosity}",
  map: null
};
const DownloadExtension = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `${validate_component(ContentSection, "ContentSection").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="container svelte-13pccfr"><h4 class="svelte-13pccfr">Ready to take your prompts to the next level?</h4>
		<p class="svelte-13pccfr">Get the
			<a href="https://bit.ly/website-chrome-web-store" target="_blank" rel="noopener">Prompt Dress browser extension for Chrome here and interact with AIs like a pro!
			</a></p>
		${validate_component(Button, "Button").$$render(
        $$result,
        {
          size: "large",
          tag: "a",
          href: "https://bit.ly/website-chrome-web-store",
          target: "_blank",
          rel: "noopener"
        },
        {},
        {
          icon: () => {
            return `${validate_component(Download, "DownloadIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
          },
          default: () => {
            return `Download
		`;
          }
        }
      )}</div>`;
    }
  })}`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".article-layout.svelte-d0vull.svelte-d0vull{--body-background-color:var(--color--post-page-background);background-color:var(--color--post-page-background)}#article-content.svelte-d0vull.svelte-d0vull{--main-column-width:65ch;position:relative;padding-top:40px;padding-bottom:80px;padding-right:15px;padding-left:15px;display:flex;flex-direction:column;gap:30px}@media(max-width: 320px){#article-content.svelte-d0vull.svelte-d0vull{padding-left:0;padding-right:0}}@media(min-width: 768px){#article-content.svelte-d0vull.svelte-d0vull{padding-right:20px;padding-left:20px}}@media(min-width: 901px){#article-content.svelte-d0vull.svelte-d0vull{padding-right:30px;padding-left:30px}}#article-content.svelte-d0vull .header.svelte-d0vull{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:10px;width:min(var(--main-column-width), 100%);margin:0 auto}#article-content.svelte-d0vull .header .note.svelte-d0vull{font-size:90%;color:rgba(var(--color--text-rgb), 0.8)}#article-content.svelte-d0vull .cover-image.svelte-d0vull{width:min(var(--main-column-width), 100%);margin:0 auto;max-height:400px;box-shadow:var(--image-shadow);border-radius:6px}#article-content.svelte-d0vull .cover-image img{max-height:400px;object-fit:cover}#article-content.svelte-d0vull .content.svelte-d0vull{display:grid;grid-template-columns:1fr min(var(--main-column-width), 100%) 1fr}#article-content.svelte-d0vull .content.svelte-d0vull > *{grid-column:2}#article-content.svelte-d0vull .content.svelte-d0vull > .full-bleed{grid-column:1/4;width:100%;max-width:1600px;margin-left:auto;margin-right:auto}#article-content.svelte-d0vull .tags.svelte-d0vull{display:flex;align-items:center;justify-content:center;gap:5px;flex-wrap:wrap}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let post;
  let { data } = $$props;
  let metaKeywords = keywords;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  ({ post } = data);
  {
    {
      if (post?.tags?.length) {
        metaKeywords = post.tags.concat(metaKeywords);
      }
      if (post?.keywords?.length) {
        metaKeywords = post.keywords.concat(metaKeywords);
      }
    }
  }
  return `${$$result.head += `<!-- HEAD_svelte-1ylu8nc_START -->${post ? `<meta name="keywords"${add_attribute("content", metaKeywords.join(", "), 0)}>

		<meta name="description"${add_attribute("content", post.excerpt, 0)}>
		<meta property="og:description"${add_attribute("content", post.excerpt, 0)}>
		<meta name="twitter:description"${add_attribute("content", post.excerpt, 0)}>
		<link rel="canonical" href="${escape(siteBaseUrl, true) + "/" + escape(post.slug, true)}">

		${$$result.title = `<title>${escape(post.title)} - ${escape(title)}</title>`, ""}
		<meta property="og:title" content="${escape(post.title, true) + " - " + escape(title, true)}">
		<meta name="twitter:title" content="${escape(post.title, true) + " - " + escape(title, true)}">

		${post.coverImage ? `<meta property="og:image" content="${escape(siteBaseUrl, true) + escape(post.coverImage, true)}">
			<meta name="twitter:image" content="${escape(siteBaseUrl, true) + escape(post.coverImage, true)}">` : ``}` : ``}<!-- HEAD_svelte-1ylu8nc_END -->`, ""}


<div class="article-layout svelte-d0vull">${validate_component(Header, "Header").$$render($$result, { showBackground: true }, {}, {})}
	<main><article id="article-content" class="svelte-d0vull"><div class="header svelte-d0vull">${post ? `<h1>${escape(post.title)}</h1>
					<div class="note svelte-d0vull">Published on ${escape(dateformat(post.date, "UTC:dd mmmm yyyy"))}</div>
					${post.updated ? `<div class="note svelte-d0vull">Updated on ${escape(dateformat(post.updated, "UTC:dd mmmm yyyy"))}</div>` : ``}
					${post.readingTime ? `<div class="note svelte-d0vull">${escape(post.readingTime)}</div>` : ``}
					${post.tags?.length ? `<div class="tags svelte-d0vull">${each(post.tags, (tag) => {
    return `${validate_component(Tag, "Tag").$$render($$result, {}, {}, {
      default: () => {
        return `${escape(tag)}`;
      }
    })}`;
  })}</div>` : ``}` : ``}</div>
			${post && post.coverImage ? `<div class="cover-image svelte-d0vull">${validate_component(Image, "Image").$$render($$result, { src: post.coverImage, alt: post.title }, {}, {})}</div>` : ``}
			<div class="content svelte-d0vull">${slots.default ? slots.default({}) : ``}</div></article>
		<div class="container">${validate_component(DownloadExtension, "DownloadExtension").$$render($$result, {}, {}, {})}</div></main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
