import React from "react";
import Articles from "../entities/Articles";
import OurBlogFullscreen from "../fullscreens/OurBlogFullscreen";
import Layout from "../components/layout/Layout";

function PageOurBlog() {
  return (
    <Layout>
      <div className="blog">
        <OurBlogFullscreen />

        <div className="container">
          <Articles />
        </div>
      </div>
    </Layout>
  );
}

export default PageOurBlog;
