import { Metadata } from "next";

import getPosts from "@/lib/get-posts";
import BlogPostFooter from "@/_components/footer";
import { FooterNavigation } from "./navigation";

export const generateMetadata = async ({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> => {
  const post = (await getPosts()).find((p) => p?.slug === params.slug);
  return {
    // metadataBase: new URL("http://localhost:3000"),
    title: post?.title,
    description: post?.description,
    alternates: {
      canonical: `https://kimyoonduk.com/blog/${params.slug}`,
    },
  };
};

async function getData({ slug }: { slug: string }) {
  const posts = await getPosts();
  console.log(posts.map((p) => p?.slug));
  const postIndex = posts.findIndex((p) => p?.slug === slug);

  if (postIndex === -1) {
    throw new Error(
      `${slug} not found in posts. Did you forget to rename the file?`
    );
  }

  const post = posts[postIndex];

  const { ...rest } = post;

  return {
    previous: posts[postIndex + 1] || null,
    next: posts[postIndex - 1] || null,
    ...rest,
  };
}

const BlogPostLayout = async ({
  children,
  params,
}: {
  children: JSX.Element;
  params: {
    slug: string;
  };
}) => {
  const { previous, next, title, date, lastModified } = await getData(params);

  // currently not used. Update getPosts to check commit history for last modified date.
  const lastModifiedDate = lastModified
    ? new Date(lastModified).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      })
    : null;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone: "UTC",
      })
    : null;

  return (
    <div className="prose prose-sm md:prose-base w-full max-w-4xl flex-grow">
      <div className="px-4">
        <div className="mb-4">
          <span className="">{formattedDate}</span>
          <div className="text-xs">
            {lastModified ? (
              <span className="">Last modified {lastModifiedDate}</span>
            ) : null}
          </div>
        </div>
        <article>
          <h1>{title}</h1>
          {children}
        </article>
      </div>
      <BlogPostFooter />
      <FooterNavigation
        previous={previous ?? undefined}
        next={next ?? undefined}
      />
    </div>
  );
};
export default BlogPostLayout;
