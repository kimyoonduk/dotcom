const BlogPost = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  return <div>{params.slug}</div>;
};
export default BlogPost;
