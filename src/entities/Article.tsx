import { NavLink } from "react-router-dom"

export interface IArticleDto {
  id: number | undefined
  title: string
  img: string
  desc: string
}

function Article(props: { item: IArticleDto }) {
  return (
    <NavLink to={`/article/${props.item.id}`} className="blog-articles__item">
      <img src={props.item.img} alt="guitar shapes" className="blog-articles__item-image" />
      <h3 className="blog-articles__item-title">{props.item.title}</h3>
      <p className="blog-articles__item-desc">{props.item.desc}</p>
    </NavLink>
  )
}

export default Article
