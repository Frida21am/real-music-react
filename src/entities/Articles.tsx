import React from "react";
import useGetArticlesList from "../hooks/useGetArticlesList";
import Article from "./Article";

function Articles() {
  const { articlesList, isLoading } = useGetArticlesList();
  if (articlesList == null) {
    return <span>Нет статей</span>;
  }
  if (isLoading) {
    return <span>Загрузка...</span>;
  }
  return (
    <div className="blog-articles">
      <div className="container">
        <div className="blog-articles__row">
          {articlesList.map((el) => (
            <Article key={el.id} item={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Articles;
