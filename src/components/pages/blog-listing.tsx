import { Link } from "react-router-dom";

const BlogListing = () => {
  return (
    <div data-testid="blog-listing">
      <h3>Blogs page</h3>
      <div style={{ display: "flex", gap: 2, marginTop: 10 }}>
        <Link to="/blog/1" data-testid="blog-item">
          <div>
            <h4>Blog 1</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
              cupiditate vitae
            </p>
          </div>
        </Link>
        <Link to="/blog/2" data-testid="blog-item">
          <div>
            <h4>Blog 2</h4>
            <p>
              quaerat cumque ducimus debitis libero inventore nihil. Quis aut
              perferendis laboriosam
            </p>
          </div>
        </Link>

        <Link to="/blog/3" data-testid="blog-item">
          <div>
            <h4>Blog 3</h4>
            <p>
              repellat tempora placeat consequuntur facilis voluptates eum
              iusto?
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogListing;
