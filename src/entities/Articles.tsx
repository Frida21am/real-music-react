import React from "react";
import Article from "./Article";
import useGetArticles from "../hooks/useGetArticles";

function Articles() {
  const articlesList = useGetArticles();

  if (articlesList == null) {
    return <span>Нет статей</span>;
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
