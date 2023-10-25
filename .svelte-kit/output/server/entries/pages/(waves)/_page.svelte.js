import { c as create_ssr_component, e as escape, v as validate_component, d as each, i as is_void } from "../../../chunks/index.js";
import { D as Downloads } from "../../../chunks/Downloads.js";
import { S as Socials } from "../../../chunks/Socials.js";
import { B as BlogPostCard, C as Card } from "../../../chunks/BlogPostCard.js";
import { C as ContentSection, T as Tag } from "../../../chunks/ContentSection.js";
import { B as Button } from "../../../chunks/Button.js";
import { I as Image } from "../../../chunks/Image.js";
/* empty css                                                               */const css$7 = {
  code: ".wrapper.svelte-jykq4w{text-align:center;margin:2vw auto}",
  map: null
};
const NewsletterSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<div class="wrapper svelte-jykq4w"><h3>Keep up to date on the extensions development!</h3>
	<h4>Subscribe to the newsletter</h4>
	<iframe title="Subscribe to Prompt Dress" src="https://promptdress.substack.com/embed" width="480" height="150" frameborder="0" scrolling="no"></iframe></div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "#hero.svelte-xzvpma.svelte-xzvpma{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;position:relative;padding:80px 0}@media(max-width: 767px){#hero.svelte-xzvpma.svelte-xzvpma{padding:40px 0 50px}}#hero.svelte-xzvpma .hello.svelte-xzvpma{text-align:center}#hero.svelte-xzvpma .intro.svelte-xzvpma{font-weight:500;font-size:1.4rem;width:min(100%, 440px);display:flex;flex-direction:column}#hero.svelte-xzvpma .intro .center.svelte-xzvpma{text-align:center}@media(max-width: 767px){#hero.svelte-xzvpma .intro.svelte-xzvpma{display:none}}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offsetY = 0;
  let scale = 1;
  let opacity = 1;
  $$result.css.add(css$6);
  return `


<section id="hero" class="svelte-xzvpma"><h1 class="hello svelte-xzvpma" style="${"transform: translateY(" + escape(offsetY, true) + "px) scale(" + escape(scale, true) + "); opacity: " + escape(opacity, true)}">Prompt Dress
	</h1>
	<p class="intro svelte-xzvpma"><span class="center svelte-xzvpma">Organize your AI prompts<br>with <span class="highlight">ease</span> and
			<span class="highlight">joy.</span></span></p>
	${validate_component(Downloads, "Downloads").$$render($$result, { showOnlyUsedBrowser: true }, {}, {})}
</section>`;
});
const About_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#about.svelte-1fg2yxq.svelte-1fg2yxq{position:relative;display:flex;gap:20px;background-color:var(--color--post-page-background);justify-content:space-between;padding:30px 100vw;margin:80px -100vw 34vh}#about.svelte-1fg2yxq.svelte-1fg2yxq::before,#about.svelte-1fg2yxq.svelte-1fg2yxq::after{background-color:var(--color--post-page-background)}@media(max-width: 767px){#about.svelte-1fg2yxq.svelte-1fg2yxq{justify-items:center;gap:20px;flex-direction:column}}#about.svelte-1fg2yxq .info.svelte-1fg2yxq{display:flex;flex-direction:column;flex-shrink:1;gap:10px}@media(max-width: 767px){#about.svelte-1fg2yxq .info h2.svelte-1fg2yxq{text-align:center}}#about.svelte-1fg2yxq .info .video.svelte-1fg2yxq{flex-shrink:0}@media(max-width: 767px){#about.svelte-1fg2yxq .info p.svelte-1fg2yxq{text-align:justify}}@media(max-width: 767px){#about.svelte-1fg2yxq .info.svelte-1fg2yxq{gap:20px}}#about.svelte-1fg2yxq .socials.svelte-1fg2yxq{display:flex;align-items:center;gap:15px}@media(max-width: 767px){#about.svelte-1fg2yxq .socials.svelte-1fg2yxq{justify-content:center;margin-bottom:10px}#about.svelte-1fg2yxq .socials span.svelte-1fg2yxq{display:none}}.highlight.svelte-1fg2yxq.svelte-1fg2yxq{color:var(--color--secondary)}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let offsetY = 0;
  $$result.css.add(css$5);
  return `


<section id="about" class="cyber-razor-top cyber-razor-bottom svelte-1fg2yxq" style="${"transform: translateY(" + escape(offsetY, true) + "px)"}"><div class="info svelte-1fg2yxq"><h2 class="svelte-1fg2yxq">Your AI prompts are valuable.
			<span class="highlight svelte-1fg2yxq">Cherish them.</span></h2>
		<p class="svelte-1fg2yxq">You spend a lot of time crafting AI prompts that get you just the right answers. Save them.
			Organize them neatly. Reuse them with a single click.
		</p>
		<div class="socials svelte-1fg2yxq"><span class="svelte-1fg2yxq">Socials:</span>
			${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div>
	<div class="video svelte-1fg2yxq"><iframe width="560" height="315" src="https://www.youtube.com/embed/O8_oTEoj15Q?si=6tRTi2TxFD0Hnac4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
</section>`;
});
const RecentPosts_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".grid.svelte-d7uie6{width:100%;display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}@media(max-width: 767px){.grid.svelte-d7uie6{grid-template-columns:1fr}}.wrapper.svelte-d7uie6{margin:0px -100vw;padding:0px 100vw;background-color:var(--color--post-page-background)}",
  map: null
};
const RecentPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$4);
  return `<div class="wrapper svelte-d7uie6">${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "recent-posts",
      title: "Learn about Prompt Engineering",
      description: "Unlock the full potential of AI with some proven techniques and best practices.",
      align: "left"
    },
    {},
    {
      button: () => {
        return `<div slot="button">${validate_component(Button, "Button").$$render($$result, { href: "/blog" }, {}, {
          default: () => {
            return `View More`;
          }
        })}</div>`;
      },
      default: () => {
        return `<div class="grid svelte-d7uie6">${each(posts, (post) => {
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
  )}</div>`;
});
const FeatureCard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".content.svelte-x9191d{display:flex;flex-direction:column;gap:10px;align-items:flex-start}.title.svelte-x9191d{display:flex;align-items:center;justify-content:space-between;width:100%;font-size:1.2rem;font-family:var(--font--title);font-weight:700}.tags.svelte-x9191d{display:flex;align-items:center;gap:5px;flex-wrap:wrap}.footer.svelte-x9191d{margin-top:20px}.feature-card .image img{object-fit:cover}",
  map: null
};
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { description } = $$props;
  let { image } = $$props;
  let { tags } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.tags === void 0 && $$bindings.tags && tags !== void 0)
    $$bindings.tags(tags);
  $$result.css.add(css$3);
  return `${validate_component(Card, "Card").$$render($$result, { additionalClass: "feature-card" }, {}, {
    footer: () => {
      return `<div class="footer svelte-x9191d" slot="footer">${tags && tags.length > 0 ? `<div class="tags svelte-x9191d">${each(tags, (tag) => {
        return `${validate_component(Tag, "Tag").$$render($$result, { color: tag.color }, {}, {
          default: () => {
            return `${escape(tag.label)}`;
          }
        })}`;
      })}</div>` : ``}</div>`;
    },
    content: () => {
      return `<div class="content svelte-x9191d" slot="content"><div class="title svelte-x9191d"><span><!-- HTML_TAG_START -->${name}<!-- HTML_TAG_END --></span></div>
		<p><!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></p></div>`;
    },
    image: () => {
      return `<div class="image" slot="image">${validate_component(Image, "Image").$$render(
        $$result,
        {
          src: image,
          alt: "Picture describing the " + name + " feature"
        },
        {},
        {}
      )}</div>`;
    }
  })}`;
});
const Features_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".features-container.svelte-9ei89p{width:100%;display:grid;grid-template-columns:1fr;grid-gap:20px}.three-group-grid.svelte-9ei89p{width:100%;display:grid;grid-template-columns:2fr 1fr;grid-gap:20px}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr 1fr}}@media(max-width: 767px){.three-group-grid.svelte-9ei89p{grid-template-columns:1fr}}@media(min-width: 1086px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 2){grid-row:span 2}}@media(max-width: 1085px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-column:span 2}}@media(max-width: 900px){.three-group-grid.svelte-9ei89p>:nth-child(3n + 1){grid-template-columns:1fr;grid-column:unset}}",
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { features } = $$props;
  if ($$props.features === void 0 && $$bindings.features && features !== void 0)
    $$bindings.features(features);
  $$result.css.add(css$2);
  return `${validate_component(ContentSection, "ContentSection").$$render(
    $$result,
    {
      id: "features",
      title: "Features",
      description: "Here are some of the browser extension's features."
    },
    {},
    {
      default: () => {
        return `<div class="features-container svelte-9ei89p"><div class="three-group-grid svelte-9ei89p">${each(features, (feature) => {
          return `${validate_component(FeatureCard, "FeatureCard").$$render(
            $$result,
            {
              name: feature.name,
              description: feature.description,
              image: feature.image,
              tags: feature.tags
            },
            {},
            {}
          )}`;
        })}</div></div>`;
      }
    }
  )}`;
});
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M3 20.29V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H7.961a2 2 0 00-1.561.75l-2.331 2.914A.6.6 0 013 20.29z" stroke="currentColor" stroke-width="1.5"></path><path d="M10.5 10h-2a1 1 0 01-1-1V8a1 1 0 011-1h1a1 1 0 011 1v2zm0 0c0 1-1 2-2 3M16.5 10h-2a1 1 0 01-1-1V8a1 1 0 011-1h1a1 1 0 011 1v2zm0 0c0 1-1 2-2 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg>`;
});
const SocialProofCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".social-proof-card.svelte-4gkii{position:relative;flex-shrink:0;display:flex;gap:20px;width:400px;padding:20px;justify-content:space-between;align-items:end;border-radius:10px;background-color:var(--color--post-page-background)}@media(max-width: 767px){.social-proof-card.svelte-4gkii{width:100%;margin:0px 16px}}.quote-icon.svelte-4gkii{position:absolute;top:-20px;left:-20px;height:80px;width:80px;z-index:1;opacity:0.2;color:var(--color--secondary);filter:drop-shadow(0px 0px 3px var(--color--secondary-shade))}.image.svelte-4gkii{flex-shrink:0;flex-grow:0;width:80px;height:80px;max-width:80px;max-height:80px;border-radius:50%;overflow:hidden}.content.svelte-4gkii{display:flex;flex-direction:column;gap:5px;height:100%;justify-content:space-between}.quote.svelte-4gkii{font-size:0.9rem;font-weight:400}.name.svelte-4gkii{font-size:0.8rem;font-weight:700}.position.svelte-4gkii{font-size:0.8rem;font-weight:400;font-style:italic}",
  map: null
};
const SocialProofCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  let { position } = $$props;
  let { image } = $$props;
  let { quote } = $$props;
  let { as = "article" } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.as === void 0 && $$bindings.as && as !== void 0)
    $$bindings.as(as);
  $$result.css.add(css$1);
  return `${((tag) => {
    return tag ? `<${as} class="social-proof-card svelte-4gkii">${is_void(tag) ? "" : `<div class="quote-icon svelte-4gkii">${validate_component(Quote, "QuoteIcon").$$render($$result, {}, {}, {})}</div>
	<div class="image svelte-4gkii">${validate_component(Image, "Image").$$render(
      $$result,
      {
        src: image,
        alt: "Image of the person who gave the testimonial"
      },
      {},
      {}
    )}</div>
	<div class="content svelte-4gkii"><p class="quote svelte-4gkii">${escape(quote)}</p>
		<div><p class="name svelte-4gkii">${escape(name)}</p>
			<p class="position svelte-4gkii"><!-- HTML_TAG_START -->${position}<!-- HTML_TAG_END --></p></div></div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(as)}`;
});
const SocialProofSection_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-1gs6me1{position:relative;display:flex;flex-direction:column;gap:2rem;align-items:center;margin:5rem 0}.quotes.svelte-1gs6me1{position:relative;display:flex;justify-content:space-around;flex-wrap:wrap;width:content-fit;gap:2rem}",
  map: null
};
const SocialProofSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { socialProofs } = $$props;
  if ($$props.socialProofs === void 0 && $$bindings.socialProofs && socialProofs !== void 0)
    $$bindings.socialProofs(socialProofs);
  $$result.css.add(css);
  return `${socialProofs && socialProofs.length ? `<section id="social-proof" class="svelte-1gs6me1"><h2>What other people say</h2>
		<div class="quotes svelte-1gs6me1">${each(socialProofs, (socialProof) => {
    return `${validate_component(SocialProofCard, "SocialProofCard").$$render($$result, Object.assign({}, socialProof), {}, {})}`;
  })}</div></section>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { features, posts, socialProofs } = data;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="container">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}
	${validate_component(About, "About").$$render($$result, {}, {}, {})}
	
	${validate_component(NewsletterSection, "NewsletterSection").$$render($$result, {}, {}, {})}
	${validate_component(Features, "Features").$$render($$result, { features }, {}, {})}
	${posts && posts.length > 0 ? `${validate_component(RecentPosts, "RecentPosts").$$render($$result, { posts }, {}, {})}` : ``}
	${validate_component(SocialProofSection, "SocialProofSection").$$render($$result, { socialProofs }, {}, {})}
	${validate_component(NewsletterSection, "NewsletterSection").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
