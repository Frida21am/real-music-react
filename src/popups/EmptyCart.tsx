import Image from "next/image";
import React from "react";

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
          <Image src="/images/basket/logo12.png" alt="" fill />
        </div>
        <div className="empty-cart-content__bg-img empty-cart-content__bg_guitar">
          <Image src="/images/basket/guitar.png" alt="" fill />
        </div>
        <div className="empty-cart-content__bg-img empty-cart-content__bg_basket">
          <Image src="/images/basket/basket.png" alt="" fill />
        </div>
      </div>
    </div>
  );
}
export default EmptyCart;
