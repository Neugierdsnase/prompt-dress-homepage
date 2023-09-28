import { c as create_ssr_component, v as validate_component, e as each, b as add_attribute, d as escape } from "../../../chunks/index.js";
import { H as Header, F as Footer } from "../../../chunks/Footer.js";
import { C as ContentSection, B as BlogPostCard, T as Tag } from "../../../chunks/ContentSection.js";
import dateformat from "dateformat";
import { k as keywords, s as siteBaseUrl, t as title } from "../../../chunks/meta.js";
import { I as Image } from "../../../chunks/Image.js";
const RelatedPosts_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".simple-grid.svelte-ypk0wh{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:20px}@media(max-width: 1070px){.simple-grid.svelte-ypk0wh{grid-template-columns:1fr 1fr}}@media(max-width: 900px){.simple-grid.svelte-ypk0wh{grid-template-columns:1fr}}",
  map: null
};
const RelatedPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$1);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "related-posts",
      title: "Related Posts"
    },
    {},
    {
      default: () => {
        return `<div class="simple-grid svelte-ypk0wh">${each(posts, (post) => {
          return `${validate_component(BlogPostCard, "BlogPostCard").$$render(
            $$result,
            {
              slug: post.slug,
              title: post.title,
              excerpt: post.excerpt,
              tags: post.tags,
              readingTime: post.readingTime,
              showImage: false
            },
            {},
            {}
          )}`;
        })}</div>`;
      }
    }
  )}`;
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
		${post.relatedPosts && post.relatedPosts.length > 0 ? `<div class="container">${validate_component(RelatedPosts, "RelatedPosts").$$render($$result, { posts: post.relatedPosts }, {}, {})}</div>` : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Layout as default
};
