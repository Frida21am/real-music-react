import { Link } from "gatsby";
import React from "react";
import Layout from "../components/layout/Layout";

function PageNotFound() {
  return (
    <Layout>
      <div>
        This page doesn't exist. Go <Link to="/">home</Link>
      </div>
    </Layout>
  );
}

export default PageNotFound;
