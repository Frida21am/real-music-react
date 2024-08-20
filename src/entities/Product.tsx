import React from "react";
import { Link } from "gatsby";
import { useState } from "react";
import Notification from "../icons/Notification";

export interface IItemDto {
  id: string;
  slug: string;
  title: string;
  frontImg?: string;
  backImg?: string;
  price: string;
  bestseller: boolean;
}

function Product(props: {
  item: IItemDto;
  addToOrder: (id: string) => void;
  addToLiked: (id: string) => void;
}) {
  const [activeLike, setActiveLike] = useState(false);

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
            activeLike ? "t1002__addBtn t1002__addBtn_active" : "t1002__addBtn"
          }
          onClick={() => {
            setActiveLike((oldActiveLike) => {
              const newValue = !oldActiveLike;
              if (newValue) {
                setActiveNotification(true);
              }
              return newValue;
            });
            props.addToLiked(props.item.id);
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
          <Link
            to={`/catalog/${props.item.slug}`}
            style={{ textDecoration: "none" }}
            className="products-item-bottom__title"
          >
            {props.item.title}
          </Link>
          <div className="products-item-bottom__price">{props.item.price}</div>
          <div className="products-item-bottom__buttons">
            <Link
              to={`/catalog/${props.item.slug}`}
              className="products-item-bottom__button products-item-bottom__button_more"
            >
              Подробнее
            </Link>
            <div
              className="products-item-bottom__button products-item-bottom__button_add"
              onClick={() => {
                setActiveNotification(true);
                props.addToOrder(props.item.id);
              }}
            >
              В корзину
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
