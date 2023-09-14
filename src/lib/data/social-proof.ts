import type { SocialProofType } from "$lib/utils/types";

export const SocialProof: SocialProofType[] = [
  {
    name: "Matthew Ziebarth",
    position: "CTO, Ada Power Woman",
    quote:
      "Blog posts are written in Markdown, a simple and nearly-universal format. This means you can bring over your posts from other platforms, and easily export to another if you want to.",
    image: "images/features/markdown.jpg",
  },
  {
    name: "Andreas Ebner",
    position: "Partner, Immobiliaris",
    quote:
      "You can easily theme the entire website by changing just a few colors in the _themes.scss file.",
    image: "images/features/themeable.jpg",
  },
  {
    name: "Heorhii Iforgot",
    position: "devOps Engineer, Seatti",
    quote:
      'Components are built to be reused, and you can build new pages and layouts without much CSS knowledge. You can see all components in Histoire by running "npm run story:dev"',
    image: "images/features/extensible.jpg",
  },
  {
    name: "Edda Bueltemayer",
    position: "Software Engineer, Firma",
    quote:
      "Images are automatically optimized and lazy loaded, to ensure the website loads as fast as possible regardless of connection speed.",
    image: "images/features/optimized.jpg",
  },
  {
    name: "Alexandra Kim",
    position: "Founder and CEO, mebloom",
    quote:
      "This template was built with dark mode in mind. It can swap between themes automatically (based on system settings) or manually. Both themes can be tweaked in the _themes.scss file.",
    image: "images/features/light-dark.jpg",
  },
  {
    name: "GPT-4",
    position: "LLM, OpenAI",
    quote:
      "Absolutely, crafting a quote that conveys social proof for your web app can help build trust and demonstrate value to prospective users. Here are a few general quotes that you might find useful...",
    image: "images/features/open-source.jpg",
  },
];

export default SocialProof;
