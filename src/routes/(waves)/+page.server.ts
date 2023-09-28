import features from '$lib/data/features';
import { filteredPosts } from '$lib/data/blog-posts';
import { socialProofs } from '$lib/data/social-proof';

export async function load() {
  const posts = filteredPosts.slice(0, 4);

  return {
    features,
    posts,
    socialProofs
  };
}
