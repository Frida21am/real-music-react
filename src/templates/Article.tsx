import React from "react";
import Layout from "../app/layout";
import { PageProps } from "gatsby";
import ArticleDetailsView from "../components/ArticleDetailsView";
import useGetArticleDetails from "../hooks/useGetArticleDetails";

type ArticleDetailsContext = {
  id: string;
};

function PageArticleDetails(props: PageProps<any, ArticleDetailsContext>) {
  const details = useGetArticleDetails(props.pageContext.id);
  return (
    <Layout>
      <div>
        <ArticleDetailsView article={details} />
      </div>
    </Layout>
  );
}

export default PageArticleDetails;
