import { StaticImage } from "gatsby-plugin-image";
import React from "react";

function EmptyBasket(props: {
  isPopupOpen: boolean;
  onPopupClosing: (isPopupOpen: boolean) => void;
}) {
  return (
    <div className="empty-cart">
      <div
        className={props.isPopupOpen ? "popup__shadow showed" : "popup__shadow"}
        onClick={() => props.onPopupClosing(false)}
      ></div>
      <div
        className={
          props.isPopupOpen ? "popup__content showed" : "popup__content"
        }
      >
        <div className="empty-cart__content">
          <span
            className="popup__close"
            onClick={() => props.onPopupClosing(false)}
          >
            <StaticImage src="../images/close.png" alt="" />
          </span>
          <div className="empty-cart-content__text">
            <div className="empty-cart-content__filter">
              <h3 className="empty-cart-content__title">Ваша корзина пуста</h3>
              <p className="empty-cart-content__caption">
                Подберите музыкальные инструменты{" "}
                <a href="/">в нашем каталоге</a>
              </p>
            </div>
          </div>
          <div className="empty-cart-content__bg">
            <div className="empty-cart-content__bg-img empty-cart-content__bg_logo">
              <StaticImage src="../images/basket/logo12.png" alt="" />
            </div>
            <div className="empty-cart-content__bg-img empty-cart-content__bg_guitar">
              <StaticImage src="../images/basket/guitar.png" alt="" />
            </div>
            <div className="empty-cart-content__bg-img empty-cart-content__bg_basket">
              <StaticImage src="../images/basket/basket.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmptyBasket;
