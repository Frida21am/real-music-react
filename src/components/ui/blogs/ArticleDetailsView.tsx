import React from "react";
import { Article } from "../../../hooks/useGetArticles";

function ArticleDetailsView(props: { article: Article }) {
  return (
    <div className="article-detail">
      <section
        style={{
          background: `url("${props.article.image}") no-repeat`,
          backgroundColor: "#7c7c7c",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        className="article-detail-banner"
      >
        <div className="article-detail-banner__caption">
          <h2
            className="article-detail-banner__caption-title"
            dangerouslySetInnerHTML={{
              __html: props.article.title,
            }}
          />
          <p
            className="article-detail-banner__caption-desc"
            dangerouslySetInnerHTML={{
              __html: props.article.excerpt,
            }}
          />
        </div>
      </section>
      <section
        className="article-detail-container"
        dangerouslySetInnerHTML={{
          __html: props.article.content,
        }}
      />
    </div>
  );
}

export default ArticleDetailsView;
