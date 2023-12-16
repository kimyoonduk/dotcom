import BlogPostFooter from "./components/footer";

const BlogPostLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <BlogPostFooter />
    </>
  );
};
export default BlogPostLayout;
