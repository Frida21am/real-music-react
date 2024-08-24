import React, { useContext } from "react";
import { Link } from "gatsby";
import { useState } from "react";
import Notification from "../icons/Notification";
import ProductsInWishlistContext from "../components/context/ProductsInWishlistContext";
import ProductsInOrderContext from "../components/context/ProductsInOrderContext";

export interface IItemDto {
  id: string;
  slug: string;
  title: string;
  frontImg?: string;
  backImg?: string;
  price: string;
  bestseller: boolean;
}

function Product(props: { item: IItemDto }) {
  const productsInWishlistContext = useContext(ProductsInWishlistContext);
  const isActiveLike = productsInWishlistContext?.liked.some(
    (id) => id == props.item.id
  );

  const productsInOrderContext = useContext(ProductsInOrderContext);
  const isAddedToCart = productsInOrderContext?.order.some(
    (id) => id == props.item.id
  );

  const [activeNotification, setActiveNotification] = useState(false);
  setTimeout(() => {
    setActiveNotification(false);
  }, 5000);

  return (
    <div className="products-gradient-box">
      <div className="products-item">
        <Link
          to={`/catalog/${props.item.slug}`}
          style={{ textDecoration: "none" }}
          className="products-item__image"
        >
          <img src={props.item.frontImg} alt="" />
        </Link>
        <div
          className={
            !props.item.bestseller
              ? "products-is-bestseller"
              : "products-is-bestseller_yes"
          }
        >
          хит!
        </div>

        <div
          className={
            isActiveLike
              ? "t1002__addBtn t1002__addBtn_active"
              : "t1002__addBtn"
          }
          onClick={() => {
            if (!isActiveLike) {
              setActiveNotification(true);
              productsInWishlistContext?.addToLiked(props.item.id);
            } else {
              productsInWishlistContext?.removeFromLiked(props.item.id);
            }
            return isActiveLike;
          }}
        >
          <svg
            width="21"
            height="18"
            viewBox="0 0 21 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z"
              stroke="black"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>

        <div className="products-item-bottom">
          <div className="products-item-bottom__info">
            <Link
              to={`/catalog/${props.item.slug}`}
              style={{ textDecoration: "none" }}
              className="products-item-bottom__title"
            >
              {props.item.title}
            </Link>
            <div className="products-item-bottom__price">
              {props.item.price}
            </div>
          </div>
          <div className="products-item-bottom__buttons">
            <Link
              to={`/catalog/${props.item.slug}`}
              className="products-item-bottom__button products-item-bottom__button_more"
            >
              Подробнее
            </Link>
            <div
              className={
                isAddedToCart
                  ? "products-item-bottom__button products-item-bottom__button_remove"
                  : "products-item-bottom__button products-item-bottom__button_add"
              }
              onClick={() => {
                if (!isAddedToCart) {
                  setActiveNotification(true);
                  productsInOrderContext?.addToOrder(props.item.id);
                } else {
                  productsInOrderContext?.removeFromOrder(props.item.id);
                }
                return isAddedToCart;
              }}
            >
              {isAddedToCart ? "Убрать из корзины" : "В корзину"}
            </div>
          </div>
        </div>
      </div>
      <Notification
        activeNotification={activeNotification}
        onNotificationClosing={setActiveNotification}
        name={props.item.title}
      />
    </div>
  );
}

export default Product;
