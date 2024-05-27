import useGetProductDetails from "../hooks/useGetProductDetails"
import Slider from "react-slick"
import DetailTabs from "./DetailTabs"
import { SvgPriceUnderline } from "../svg/svg"
import { NavLink } from "react-router-dom"

function ProductDetailsView(props: { productId: number }) {
  const { productDetails, isLoading } = useGetProductDetails(props.productId)

  if (productDetails == null) {
    return <span>Нет такого товара</span>
  }
  if (isLoading) {
    return <span>Загрузка...</span>
  }
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={`/product${productDetails.id}/sliderImage${i + 1}.jpg`} />
        </a>
      )
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="detail">
      <div className="detail-bg">
        <div className="container">
          <NavLink to="/gifts" target="_blank" className="detail-gift">
            <img src={"/giftbox.png"} alt="" />
            <span>При заказе этого инструмента Вы получите аксессуар в подарок!</span>
          </NavLink>
          <div className="detail-card__row">
            <div className="detail-slider slider-container">
              <Slider {...settings}>
                {productDetails.images.map((imageSrc) => (
                  <div className="detail-slider-full-image" key={productDetails.id}>
                    <img src={imageSrc} />
                  </div>
                ))}
              </Slider>
            </div>
            <DetailCard productDetails={productDetails} />
          </div>
          <DetailTabs description={productDetails.descriptionFull} characteristics={productDetails.characteristics} />
        </div>
      </div>
    </div>
  )
}

function DetailCard(props: {
  productDetails: { title: string; description: string; isInStock: boolean; price: string }
}) {
  return (
    <div className="detail-card">
      <h2 className="detail-card__title">{props.productDetails.title}</h2>
      <p className="detail-card__desc">{props.productDetails.description}</p>
      <div className="detail-card-purchase">
        <div className="detail-card-purchase-info">
          <span className="detail-card-purchase-info__stock">
            {props.productDetails.isInStock ? "В наличии" : "Нет в наличии"}
          </span>
          <span className="detail-card-purchase-info__price">{props.productDetails.price} р.</span>
          <SvgPriceUnderline />
        </div>
        <div className="detail-card-purchase-buttons">
          <a href="#" className="detail-card-purchase-buttons__tocart">
            В корзину
          </a>
          <a href="#" className="detail-card-purchase-buttons__tofavorites">
            В избранное
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsView
