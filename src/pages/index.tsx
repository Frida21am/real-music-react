import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/layout/Layout";
import PageCatalog from "./catalog";

export default function IndexPage() {
  return (
    <Layout>
      <PageCatalog />
    </Layout>
  );
}

export const Head: HeadFC = () => <title>Home Page</title>;
