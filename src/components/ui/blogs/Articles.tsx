import React from "react";
import { getArticles } from "@/api/articles";
import Image from "next/image";
import Link from "next/link";

async function Articles() {
  const articlesList = await getArticles();

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
    <Link href={`/blog/${props.item.slug}`} className="blog-articles__item">
      {props.item.image && (
        <Image
          src={props.item.image}
          className="blog-articles__item-image"
          alt="Изображение статьи"
          width={360}
          height={240}
        />
      )}

      <h3 className="blog-articles__item-title">{props.item.title}</h3>
      <p className="blog-articles__item-desc">
        {props.item.excerpt.replace(/<.*?>/g, "")}
      </p>
    </Link>
  );
}

export default Articles;
