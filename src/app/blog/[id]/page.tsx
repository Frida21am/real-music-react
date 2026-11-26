import React from "react";
import { getArticleDetails } from "@/api/articles";
import { notFound } from "next/navigation";
import ArticleDetailsView from "@/components/ui/blogs/ArticleDetailsView";

async function PageArticleDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const details = await getArticleDetails(id);
  if (!details) notFound();
  return (
    <div>
      <ArticleDetailsView article={details} />
    </div>
  );
}

export default PageArticleDetails;
