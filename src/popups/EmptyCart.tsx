import React from "react";
import { StaticImage } from "gatsby-plugin-image";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart-content__text">
        <div className="empty-cart-content__filter">
          <h3 className="empty-cart-content__title">Ваша корзина пуста</h3>
          <p className="empty-cart-content__caption">
            Подберите музыкальные инструменты <a href="/">в нашем каталоге</a>
          </p>
        </div>
      </div>
      <div className="empty-cart-content__bg">
        <div className="empty-cart-content__bg-img empty-cart-content__bg_logo">
          <StaticImage
            src="../images/basket/logo12.png"
            alt=""
            placeholder="none"
          />
        </div>
        <div className="empty-cart-content__bg-img empty-cart-content__bg_guitar">
          <StaticImage
            src="../images/basket/guitar.png"
            alt=""
            placeholder="none"
          />
        </div>
        <div className="empty-cart-content__bg-img empty-cart-content__bg_basket">
          <StaticImage
            src="../images/basket/basket.png"
            alt=""
            placeholder="none"
          />
        </div>
      </div>
    </div>
  );
}
export default EmptyCart;
