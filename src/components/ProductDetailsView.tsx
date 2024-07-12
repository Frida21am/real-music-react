import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import DetailTabs from "./DetailTabs";
import { SvgPriceUnderline } from "../svg/svg";
import React from "react";
import { Link } from "gatsby";
import { Product } from "../hooks/useGetProducts";
import { StaticImage } from "gatsby-plugin-image";

function ProductDetailsView(props: { product: Product }) {
  const productDetails = props.product;

  if (productDetails == null) {
    return <span>Нет такого товара</span>;
  }

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={productDetails.images[i]} alt="" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="detail">
      <div className="detail-bg">
        <div className="container">
          <Link to="/gifts" target="_blank" className="detail-gift">
            <div className="detail-gift__image">
              <StaticImage src="../images/giftbox.png" alt="top" />
            </div>
            <span>
              При заказе этого инструмента Вы получите аксессуар в подарок!
            </span>
          </Link>
          <div className="detail-card__row">
            <div className="detail-slider slider-container">
              <Slider {...settings}>
                {productDetails.images.map((imageSrc) => (
                  <div
                    className="detail-slider-full-image"
                    key={productDetails.id}
                  >
                    <img src={imageSrc} />
                  </div>
                ))}
              </Slider>
            </div>
            <DetailCard productDetails={productDetails} />
          </div>
          <DetailTabs
            description={productDetails.description}
            characteristics={productDetails.characteristics}
          />
        </div>
      </div>
    </div>
  );
}

function DetailCard(props: {
  productDetails: {
    title: string;
    description: string;
    descriptionShort: string;
    isInStock: boolean;
    price: string;
  };
}) {
  return (
    <div className="detail-card">
      <h2 className="detail-card__title">{props.productDetails.title}</h2>
      <p className="detail-card__desc">
        {props.productDetails.descriptionShort}
      </p>
      <div className="detail-card-purchase">
        <div className="detail-card-purchase-info">
          <span className="detail-card-purchase-info__stock">
            {props.productDetails.isInStock ? "В наличии" : "Нет в наличии"}
          </span>
          <span className="detail-card-purchase-info__price">
            {props.productDetails.price}
          </span>
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
  );
}

export default ProductDetailsView;
