import React from "react";
import useGetArticles from "../../../hooks/useGetArticles";
import Image from "next/image";
import Link from "next/link";

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

export interface IArticleDto {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image?: string;
}

function Article(props: { item: IArticleDto }) {
  return (
    <Link href={`/articles/${props.item.slug}`} className="blog-articles__item">
      <Image
        src={props.item.image ?? ""}
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

export default Articles;
