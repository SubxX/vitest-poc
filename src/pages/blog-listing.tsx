import { Link } from "react-router-dom";
import { getPosts, Post } from "../api/blog.api";
import { useEffect, useState } from "react";

const BlogListing = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div data-testid="blog-listing">
      <h3>Blogs page</h3>
      <div style={{ display: "flex", gap: 2, marginTop: 10, flexWrap: "wrap" }}>
        {posts.map((post) => (
          <Link to={`/blog/${post.id}`} data-testid="blog-item">
            <div>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListing;
