import { c as create_ssr_component, d as escape, b as add_attribute, o as onDestroy, e as each, v as validate_component, f as null_to_empty, i as is_void } from "../../../chunks/index.js";
import { B as Button } from "../../../chunks/Button.js";
import { S as Socials } from "../../../chunks/Socials.js";
import { I as Image } from "../../../chunks/Image.js";
import { C as ContentSection, B as BlogPostCard, a as Card, T as Tag } from "../../../chunks/ContentSection.js";
const Learning = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="currentColor"><path d="M6.818 22v-2.857C6.52 16.166 3 14.572 3 10c0-4.57 2.727-8.056 8.182-8 3.927.042 7.636 2.286 7.636 6.858L21 12.286c0 2.286-2.182 2.286-2.182 2.286s.546 5.714-4.364 5.714V22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 12a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 13a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.3 2"></path></svg>`;
});
const Download = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="100%" height="100%" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 20L18 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 4V16M12 16L15.5 12.5M12 16L8.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;
});
const SingleSparkle_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".wrapper.svelte-npbrw{position:absolute;pointer-events:none;display:flex;z-index:2;filter:blur(2px);animation:svelte-npbrw-grow-and-shrink 1400ms ease-in-out forwards}@keyframes svelte-npbrw-grow-and-shrink{0%{transform:scale(0)}50%{transform:scale(1)}100%{transform:scale(0)}}",
  map: null
};
const SingleSparkle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color } = $$props;
  let { size } = $$props;
  let { offset } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  $$result.css.add(css$9);
  return `<div class="wrapper svelte-npbrw" style="${"top: " + escape(offset.top - 10, true) + "; left: " + escape(offset.left, true) + ";"}"><svg${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"${add_attribute("fill", color, 0)}></path></svg></div>`;
});
const Sparkles_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".sparkle-wrapper.svelte-exdx8u.svelte-exdx8u{position:relative;display:inline-block}.sparkle-wrapper.svelte-exdx8u .slot-wrapper.svelte-exdx8u{position:relative;z-index:1}",
  map: null
};
const Sparkles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let sparkles = [];
  let sparklesInterval;
  onDestroy(() => {
    clearInterval(sparklesInterval);
  });
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$8);
  return `<div class="sparkle-wrapper svelte-exdx8u">${each(sparkles, (sparkle) => {
    return `${validate_component(SingleSparkle, "Sparkle").$$render(
      $$result,
      {
        color: sparkle.color,
        size: String(sparkle.size),
        offset: sparkle.style
      },
      {},
      {}
    )}`;
  })}
	<span class="slot-wrapper svelte-exdx8u">${slots.default ? slots.default({}) : ``}</span>
</div>`;
});
const Hero_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "#hero.svelte-145iwr0.svelte-145iwr0{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:15px;position:relative;padding:80px 0}@media(max-width: 767px){#hero.svelte-145iwr0.svelte-145iwr0{padding:40px 0 50px}}#hero.svelte-145iwr0 .hello.svelte-145iwr0{text-align:center}#hero.svelte-145iwr0 .intro.svelte-145iwr0{font-weight:500;font-size:1.4rem;width:min(100%, 440px);display:flex;flex-direction:column}#hero.svelte-145iwr0 .intro .center.svelte-145iwr0{text-align:center}@media(max-width: 767px){#hero.svelte-145iwr0 .intro.svelte-145iwr0{display:none}}#hero.svelte-145iwr0 .ctas.svelte-145iwr0{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:10px;width:100%}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `<section id="hero" class="svelte-145iwr0">${validate_component(Sparkles, "Sparkles").$$render($$result, {}, {}, {
    default: () => {
      return `<h1 class="hello svelte-145iwr0">Prompt Dress</h1>`;
    }
  })}
	<p class="intro svelte-145iwr0"><span class="center svelte-145iwr0">Organize your AI prompts<br>with ease and joy.</span></p>
	<div class="ctas svelte-145iwr0">${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: "https://chrome.google.com/webstore/detail/prompt-dress/mpcinhhegdohpapgmiopjlfhemhhfmid"
    },
    {},
    {
      icon: () => {
        return `${validate_component(Download, "DownloadIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
      },
      default: () => {
        return `Download for Chrome
		`;
      }
    }
  )}
		${validate_component(Button, "Button").$$render($$result, { color: "primary", href: "/blog" }, {}, {
    icon: () => {
      return `${validate_component(Learning, "LearningIcon").$$render($$result, { slot: "icon" }, {}, {})}`;
    },
    default: () => {
      return `Learn about AI prompting
		`;
    }
  })}</div>
</section>`;
});
const SparklingHighlight_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "strong.primary.svelte-8f8x6d{color:var(--color--primary)}strong.secondary.svelte-8f8x6d{color:var(--color--secondary)}",
  map: null
};
const SparklingHighlight = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "default" } = $$props;
  let { sparkleColor = "default" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.sparkleColor === void 0 && $$bindings.sparkleColor && sparkleColor !== void 0)
    $$bindings.sparkleColor(sparkleColor);
  $$result.css.add(css$6);
  return `${validate_component(Sparkles, "Sparkles").$$render($$result, { color: sparkleColor }, {}, {
    default: () => {
      return `<strong class="${escape(null_to_empty(color), true) + " svelte-8f8x6d"}">${slots.default ? slots.default({}) : ``}</strong>`;
    }
  })}`;
});
const About_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#about.svelte-1qp99xm.svelte-1qp99xm{position:relative;display:grid;grid-template-columns:500px 250px;align-items:center;justify-content:space-between;padding-bottom:50px}@media(max-width: 767px){#about.svelte-1qp99xm.svelte-1qp99xm{grid-template-columns:1fr;justify-items:center;gap:20px}}#about.svelte-1qp99xm .info.svelte-1qp99xm{display:flex;flex-direction:column;gap:10px}@media(max-width: 767px){#about.svelte-1qp99xm .info h2.svelte-1qp99xm{text-align:center}}@media(max-width: 767px){#about.svelte-1qp99xm .info p.svelte-1qp99xm{text-align:justify}}@media(max-width: 767px){#about.svelte-1qp99xm .info.svelte-1qp99xm{gap:20px}}#about.svelte-1qp99xm .socials.svelte-1qp99xm{display:flex;align-items:center;gap:15px}@media(max-width: 767px){#about.svelte-1qp99xm .socials.svelte-1qp99xm{justify-content:center;margin-bottom:10px}#about.svelte-1qp99xm .socials span.svelte-1qp99xm{display:none}}#about.svelte-1qp99xm .image.svelte-1qp99xm{width:220px;height:220px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<section id="about" class="svelte-1qp99xm"><div class="info svelte-1qp99xm"><h2 class="svelte-1qp99xm">Your AI prompts are valuable.
			${validate_component(SparklingHighlight, "SparklingHighlight").$$render($$result, { color: "secondary" }, {}, {
    default: () => {
      return `Cherish them.`;
    }
  })}</h2>
		<p class="svelte-1qp99xm">You spend a lot of time crafting AI prompts that get you just the right answers. Save them.
			Organize them neatly. Reuse them with a single click.
		</p>
		<div class="socials svelte-1qp99xm"><span class="svelte-1qp99xm">Socials:</span>
			${validate_component(Socials, "Socials").$$render($$result, {}, {}, {})}</div></div>
	<div class="image svelte-1qp99xm">${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: "/images/sample-image.png",
      alt: "Sample for the static template"
    },
    {},
    {}
  )}</div>
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
      title: "Prompt Engineering",
      description: "Learn more about how to write prompts that get you the best results with these blog posts.",
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
      return `<div class="content svelte-x9191d" slot="content"><div class="title svelte-x9191d"><span>${escape(name)}</span></div>
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
  code: ".social-proof-card.svelte-1eieqao{position:relative;flex-shrink:0;display:flex;gap:20px;width:400px;padding:20px;justify-content:space-between;align-items:end;border-radius:10px;background-color:var(--color--post-page-background)}.quote-icon.svelte-1eieqao{position:absolute;top:-20px;left:-20px;height:80px;width:80px;z-index:1;opacity:0.2;color:var(--color--secondary);filter:drop-shadow(0px 0px 3px var(--color--secondary-shade))}.image.svelte-1eieqao{flex-shrink:0;flex-grow:0;width:80px;height:80px;max-width:80px;max-height:80px;border-radius:50%;overflow:hidden}.content.svelte-1eieqao{display:flex;flex-direction:column;gap:5px;height:100%;justify-content:space-between}.quote.svelte-1eieqao{font-size:0.9rem;font-weight:400}.name.svelte-1eieqao{font-size:0.8rem;font-weight:700}.position.svelte-1eieqao{font-size:0.8rem;font-weight:400;font-style:italic}",
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
    return tag ? `<${as} class="social-proof-card svelte-1eieqao">${is_void(tag) ? "" : `<div class="quote-icon svelte-1eieqao">${validate_component(Quote, "QuoteIcon").$$render($$result, {}, {}, {})}</div>
	<div class="image svelte-1eieqao"><img${add_attribute("src", image, 0)} aria-hidden alt="Image of the person who gave the testimonial"></div>
	<div class="content svelte-1eieqao"><p class="quote svelte-1eieqao">${escape(quote)}</p>
		<div><p class="name svelte-1eieqao">${escape(name)}</p>
			<p class="position svelte-1eieqao">${escape(position)}</p></div></div>`}${is_void(tag) ? "" : `</${tag}>`}` : "";
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
	${validate_component(Features, "Features").$$render($$result, { features }, {}, {})}
	${posts && posts.length > 0 ? `${validate_component(RecentPosts, "RecentPosts").$$render($$result, { posts }, {}, {})}` : ``}
	${validate_component(SocialProofSection, "SocialProofSection").$$render($$result, { socialProofs }, {}, {})}</div>`;
});
export {
  Page as default
};
