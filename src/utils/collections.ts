import { getCollection } from 'astro:content';

/**
 * Get all posts sorted by date (newest first)
 */
export async function getAllPosts() {
  return (await getCollection('posts')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

/**
 * Get featured posts only
 */
export async function getFeaturedPosts() {
  return (await getCollection('posts', ({ data }) => data.featured === true)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
}

/**
 * Get all portfolio projects sorted by date (newest first)
 */
export async function getAllProjects() {
  return (await getCollection('portfolio')).sort(
    (a, b) => b.data.projectDate.valueOf() - a.data.projectDate.valueOf()
  );
}

/**
 * Get all unique tags from posts
 */
export async function getAllTags() {
  const posts = await getCollection('posts');
  const tags = new Set<string>();

  posts.forEach(post => {
    if (post.data.tags) {
      post.data.tags.forEach(tag => tags.add(tag));
    }
  });

  return Array.from(tags).sort();
}

/**
 * Get tag counts for tag cloud
 */
export async function getTagCounts() {
  const posts = await getCollection('posts');
  const tagCounts = new Map<string, number>();

  posts.forEach(post => {
    if (post.data.tags) {
      post.data.tags.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    }
  });

  return tagCounts;
}
