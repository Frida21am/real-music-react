import React from "react";
import Layout from "../../layout";
import useGetArticleDetails from "../../../hooks/useGetArticleDetails";
import ArticleDetailsView from "@/components/ui/blogs/ArticleDetailsView";

function PageArticleDetails({ params }: { params: { id: string } }) {
  const details = useGetArticleDetails(params.id);
  return (
    <Layout>
      <div>
        <ArticleDetailsView article={details} />
      </div>
    </Layout>
  );
}

export default PageArticleDetails;
