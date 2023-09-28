import { f as filteredPosts } from "../../../chunks/index2.js";
const Features = [
  {
    name: "<b>Free.<b/><br>No credit card required.<br>Not even an email address.",
    description: 'All features you see on this website are free and will remain so. If you want network or enterprise features, please <a href="mailto: prompt-dress@vomkonstant.in" target="_blank" /> contact me via email</a>.',
    image: "images/cyberpunk/coffee_small.png",
    tags: []
  },
  {
    name: "100% Compliant",
    description: "No data gets sent anywhere from the browser extension. Everything is saved locally on your computer.",
    image: "images/cyberpunk/handshake_small.png",
    tags: []
  },
  {
    name: "Multi-Step Priming and Prompting",
    description: 'With the <b>"Shawl"</b> feature (in active development), you can prime the model in multiple steps. Making it easier to get the model to stick to a certain schema or template.',
    image: "images/cyberpunk/shawl.png",
    tags: [{ label: "On the way" }]
  },
  {
    name: "Dynamic values",
    description: 'No more manually searching for words or phrases you need to adjust for the occasion. The <b>"Corsages"</b> feature allows you to dynamically change values in the prompt before feeding it to the model.',
    image: "images/cyberpunk/corsage.png",
    tags: []
  },
  {
    name: "Versioning",
    description: "Do you want to iterate over an old version of your prompt because it stopped working, but you don't want to delete it. No problem, just use the versioning feature (actively being developed).",
    image: "images/cyberpunk/tailor.png",
    tags: [{ label: "Next on the Roadmap", color: "secondary" }]
  },
  {
    name: "Tags and Filters",
    description: "Organize your prompts in a straightforward manner, not more sifting through folders and text files.",
    image: "images/cyberpunk/wip_dress.png",
    tags: [{ label: "Coming Soon", color: "secondary" }]
  }
];
const socialProofs = [
  {
    name: "Matthew Ziebarth",
    position: 'CTO and Cofounder, <a href="https://adaapp.com" target="_blank" rel="nofollow noopener">Ada Growth</a>',
    quote: "Prompt Dress completely solved my issues with saving and organizing my prompts in text files.",
    image: "images/social-proof/matthew.jpg"
  },
  {
    name: "Andreas Ebner",
    position: "Partner, Immobiliaris",
    quote: "With Prompt Dress I created and maintained powerful prompts for writing ad texts, and I always have them ready in my browser.",
    image: "images/social-proof/andi.jpg"
  },
  {
    name: "Heorhii Teryaev",
    position: "devOps Engineer, Seatti",
    quote: "It's where I keep all my prompts. It has everything I need while not being in the way.",
    image: "images/social-proof/gosha.jpg"
  },
  {
    name: "Alexandra Kim",
    position: 'Founder and CEO, <a href="https://www.themebloom.com/" target="_blank" rel="nofollow noopener">MeBloom</a>',
    quote: "It takes a bit of convincing and fine-tuning before we get the tone for our copies just right. Using Prompt Dress, we never have to look far for the prompts we know are working.",
    image: "images/social-proof/sasha.jpg"
  },
  {
    name: "GPT-4",
    position: 'LLM, <a href="https://openai.com/" target="_blank" rel="nofollow noopener">OpenAI</a>',
    quote: "Absolutely, crafting a quote that conveys social proof for your web app can help build trust and demonstrate value to prospective users. Here are a few general quotes that you might find useful...",
    image: "images/social-proof/chatgpt.png"
  }
];
async function load() {
  const posts = filteredPosts.slice(0, 4);
  return {
    features: Features,
    posts,
    socialProofs
  };
}
export {
  load
};
