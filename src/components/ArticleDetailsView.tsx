import useGetArticleDetails from "../hooks/useGetArticleDetails"

export interface IArticleDetailsDto {
  title: string
  detailImg: string
  detailDesc: React.ReactNode
  detailContent: React.ReactNode
}

function ArticleDetailsView(props: { articleId: number }) {
  const { articleDetails, isLoading } = useGetArticleDetails(props.articleId)
  if (articleDetails == null) {
    return <span>Нет такого товара</span>
  }
  if (isLoading) {
    return <span>Загрузка...</span>
  }

  return (
    <div className="article-detail">
      <section
        style={{
          background: `url("${articleDetails.detailImg}") no-repeat`,
          backgroundColor: "#7c7c7c",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
        }}
        className="article-detail-banner"
      >
        <div className="article-detail-banner__caption">
          <h2 className="article-detail-banner__caption-title">{articleDetails.title}</h2>
          {articleDetails.detailDesc}
        </div>
      </section>
      {articleDetails.detailContent}
    </div>
  )
}

export default ArticleDetailsView
