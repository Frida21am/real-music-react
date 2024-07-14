import React from "react";
import { Link } from "gatsby";

export interface IArticleDto {
  id: number | undefined;
  title: string;
  img: string;
  desc: string;
}

function Article(props: { item: IArticleDto }) {
  return (
    <Link to={`/article/${props.item.id}`} className="blog-articles__item">
      <img
        src={props.item.img}
        alt="guitar shapes"
        className="blog-articles__item-image"
      />
      <h3 className="blog-articles__item-title">{props.item.title}</h3>
      <p className="blog-articles__item-desc">{props.item.desc}</p>
    </Link>
  );
}

export default Article;
