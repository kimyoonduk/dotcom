import getPosts from "../lib/get-posts";

export default async function sitemap() {
  const posts = await getPosts();
  const blogs = posts.map((post) => ({
    url: `https://kimyoonduk.com/blog/${post!.slug}`,
    lastModified: post!.lastModified
      ? new Date(post!.lastModified).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
  }));

  const routes = ["", "/about", "/projects"].map((route) => ({
    url: `https://kimyoonduk.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
