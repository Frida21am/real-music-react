export interface IArticleDto {
  id: number | undefined
  title: string
  img: string
  desc: string
}

function Article(props: { item: IArticleDto }) {
  return (
    <a href="/" className="blog-articles__item">
      <img src={props.item.img} alt="guitar shapes" className="blog-articles__item-image" />
      <h3 className="blog-articles__item-title">{props.item.title}</h3>
      <p className="blog-articles__item-text">{props.item.desc}</p>
    </a>
  )
}

export default Article
