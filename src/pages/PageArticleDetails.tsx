import { useParams } from "react-router-dom"
import ArticleDetailsView from "../components/ArticleDetailsView"

function PageArticleDetails() {
  const { id } = useParams()
  if (id == null) {
    return (
      <div className="no-articles">
        <p>Статья отсутствует</p>
      </div>
    )
  }
  const idNumber = Number.parseInt(id)
  return (
    <div>
      <ArticleDetailsView articleId={idNumber} />
    </div>
  )
}

export default PageArticleDetails
