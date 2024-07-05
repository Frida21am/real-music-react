import React from "react";
import MainFullScreen from "../components/MainFullScreen";
import Layout from "../components/layout/Layout";

function PageOurBlog() {
  return (
    <Layout>
      <div className="blog">
        <MainFullScreen />

        <div className="container">
          <h2 className="blog__title">Наш блог</h2>
        </div>
      </div>
    </Layout>
  );
}

export default PageOurBlog;
