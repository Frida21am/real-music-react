import React from "react";
import Article from "./Article";
import { articles } from "../data/data";

export type Article = {
  id: number;
  title: string;
  img: string;
  desc: string;
};

function Articles() {
  const articlesList: Article[] = articles;

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
