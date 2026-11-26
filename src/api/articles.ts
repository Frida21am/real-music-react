export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
  content: string;
};

type WordPressPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: { "wp:featuredmedia"?: { source_url: string }[] };
};

export async function getArticles(): Promise<Article[]> {
  const response = await fetch("https://wp.real-music.store/wp-json/wp/v2/posts?per_page=20&_embed", {
    next: { revalidate: 300 },
  });
  if (!response.ok) return [];
  const posts = (await response.json()) as WordPressPost[];
  return posts.map((post) => ({
    id: String(post.id),
    slug: post.slug,
    title: post.title.rendered,
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
  }));
}

export async function getArticleDetails(slug: string) {
  return (await getArticles()).find((article) => article.slug === slug);
}
