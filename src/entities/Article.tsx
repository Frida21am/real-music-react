import React from "react";
import { Link } from "gatsby";

export interface IArticleDto {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
}

function Article(props: { item: IArticleDto }) {
  return (
    <Link to={`/articles/${props.item.slug}`} className="blog-articles__item">
      <img
        src={props.item.image}
        className="blog-articles__item-image"
        alt="guitar shapes"
      />
      <h3 className="blog-articles__item-title">{props.item.title}</h3>
      <p className="blog-articles__item-desc">
        {props.item.excerpt.replace(/<.*?>/g, "")}
      </p>
    </Link>
  );
}

export default Article;
