import BlogPostFooter from "@/_components/footer";

const BlogPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose prose-sm md:prose-base w-full max-w-4xl flex-grow">
      <div className="px-4">{children}</div>
      <BlogPostFooter />
    </div>
  );
};
export default BlogPostLayout;
