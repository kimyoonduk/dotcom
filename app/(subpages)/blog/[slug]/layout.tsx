import BlogPostFooter from "@/_components/footer";

const BlogPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="prose">
      {children}
      <BlogPostFooter />
    </div>
  );
};
export default BlogPostLayout;
