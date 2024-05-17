import { useParams } from "react-router-dom"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductDetailsView from "../components/ProductDetailsView"

function PageProductDetails() {
  const { id } = useParams()
  if (id == null) {
    return (
      <div className="no-products">
        <p>Нет такого товара</p>
      </div>
    )
  }
  const idNumber = Number.parseInt(id)
  return (
    <div>
      <ProductDetailsView productId={idNumber} />
    </div>
  )
}

export default PageProductDetails
