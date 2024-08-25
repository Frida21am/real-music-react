import React, { useContext, useState } from "react";
import DetailTabs from "./DetailTabs";
import ProductSlider from "./ProductSlider";
import VideoFrame from "../popups/VideoFrame";
import { SvgPriceUnderline } from "../svg/svg";
import { Link } from "gatsby";
import { Product } from "../hooks/useGetProducts";
import { StaticImage } from "gatsby-plugin-image";
import Notification from "../icons/Notification";
import ProductsInOrderContext from "./context/ProductsInOrderContext";
import ProductsInWishlistContext from "./context/ProductsInWishlistContext";

function ProductDetailsView(props: { product: Product }) {
  const productDetails = props.product;
  if (productDetails == null) {
    return <span>Нет такого товара</span>;
  }

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
            <div className="detail-slider">
              <ProductSlider productImages={productDetails.images} />
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
    id: string;
    title: string;
    description: string;
    descriptionShort: string;
    isInStock: boolean;
    price: string;
    videoSrc?: string;
  };
}) {
  const productsInOrderContext = useContext(ProductsInOrderContext);
  const isAddedToCart = productsInOrderContext?.order.some(
    (id) => id == props.productDetails.id
  );

  const productsInWishlistContext = useContext(ProductsInWishlistContext);

  const [activeNotification, setActiveNotification] = useState(false);
  setTimeout(() => {
    setActiveNotification(false);
  }, 5000);

  return (
    <div className="detail-card">
      <h2 className="detail-card__title">{props.productDetails.title}</h2>
      <p
        className="detail-card__desc"
        dangerouslySetInnerHTML={{
          __html: props.productDetails.descriptionShort,
        }}
      />

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
          <button
            className={
              isAddedToCart
                ? "detail-card-purchase-buttons__tocart detail-card-purchase-buttons__tocart_remove"
                : "detail-card-purchase-buttons__tocart"
            }
            onClick={() => {
              if (!isAddedToCart) {
                setActiveNotification(true);
                productsInOrderContext?.addToOrder(props.productDetails.id);
              } else {
                productsInOrderContext?.removeFromOrder(
                  props.productDetails.id
                );
              }
              return isAddedToCart;
            }}
          >
            {isAddedToCart ? "Убрать из корзины" : "В корзину"}
          </button>
          <button
            className="detail-card-purchase-buttons__tofavorites"
            onClick={() => {
              setActiveNotification(true);
              productsInWishlistContext?.addToLiked(props.productDetails.id);
            }}
          >
            В избранное
          </button>
        </div>
      </div>

      <VideoFrame frameUrl={props.productDetails.videoSrc} />
      <Notification
        activeNotification={activeNotification}
        onNotificationClosing={setActiveNotification}
        name={props.productDetails.title}
      />
    </div>
  );
}

export default ProductDetailsView;
