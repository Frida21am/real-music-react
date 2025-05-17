import React, { useContext } from "react";
import { toast } from "react-toastify";
import DetailTabs from "./DetailTabs";
import ProductSlider from "./ProductSlider";
import VideoFrame from "../popups/VideoFrame";
import ProductsInOrderContext from "../../context/ProductsInOrderContext";
import ProductsInWishlistContext from "../../context/ProductsInWishlistContext";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/api/apiClient.dto";
import { SvgPriceUnderline } from "./SvgPriceUnderline";

function ProductDetailsView(props: { product: Product }) {
  const productDetails = props.product;
  if (productDetails == null) {
    return <span>Нет такого товара</span>;
  }

  return (
    <div className="detail">
      <div className="detail-bg">
        <div className="container">
          <Link href="/gifts" target="_blank" className="detail-gift">
            <div className="detail-gift__image">
              <Image src="/images/giftbox.png" alt="top" fill />
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
    id: number;
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
  const isAddedToWishlist = productsInWishlistContext?.liked.some(
    (id) => id == props.productDetails.id
  );

  const notify = () => toast("Товар добавлен");

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
                notify();
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
            className={
              isAddedToWishlist
                ? "detail-card-purchase-buttons__tofavorites detail-card-purchase-buttons__tofavorites_remove"
                : "detail-card-purchase-buttons__tofavorites"
            }
            onClick={() => {
              if (!isAddedToWishlist) {
                notify();
                productsInWishlistContext?.addToLiked(props.productDetails.id);
              } else {
                productsInWishlistContext?.removeFromLiked(
                  props.productDetails.id
                );
              }
              return isAddedToWishlist;
            }}
          >
            {isAddedToWishlist ? "Из избранного" : "В избранное"}
          </button>
        </div>
      </div>

      <VideoFrame frameUrl={props.productDetails.videoSrc} />
    </div>
  );
}

export default ProductDetailsView;
