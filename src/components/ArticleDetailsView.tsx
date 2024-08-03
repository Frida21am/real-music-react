import React from "react";
import { Article } from "../hooks/useGetArticles";

function ArticleDetailsView(props: { article: Article }) {
  return (
    <>
      <p
        className="detail-card__desc"
        dangerouslySetInnerHTML={{
          __html: props.article.title,
        }}
      />
      <p
        className="detail-card__desc"
        dangerouslySetInnerHTML={{
          __html: props.article.excerpt,
        }}
      />
      <img src={props.article.image} alt="" />
    </>
  );
}

export default ArticleDetailsView;
