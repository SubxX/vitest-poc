import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <span data-testid="blog-single-item">{id}</span>
    </div>
  );
};

export default BlogDetails;
