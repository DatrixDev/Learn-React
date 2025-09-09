import { Outlet, Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h1>Blog Page</h1>

      <nav>
        <Link to="news">Go to News</Link>
        <br />
        <Link to="blogRelated">Go to BlogRelated</Link>
      </nav>

      {/* Chỗ này sẽ render BlogNew hoặc BlogRelated khi vào route con */}
      <Outlet />
    </div>
  );
}

export default Blog;
