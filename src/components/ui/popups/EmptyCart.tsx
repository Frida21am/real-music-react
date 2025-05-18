import Image from "next/image";
import Link from "next/link";
import React from "react";
import basketImage from "@/images/basket/basket.png";
import guitarImage from "@/images/basket/guitar.png";
import logo12Image from "@/images/basket/logo12.png";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <div className="empty-cart-content__text">
        <div className="empty-cart-content__filter">
          <h3 className="empty-cart-content__title">Ваша корзина пуста</h3>
          <p className="empty-cart-content__caption">
            Подберите музыкальные инструменты{" "}
            <Link href="/">в нашем каталоге</Link>
          </p>
        </div>
      </div>
      <div className="empty-cart-content__bg">
        <div className="empty-cart-content__bg-img empty-cart-content__bg_logo">
          <Image src={logo12Image} alt="" fill />
        </div>
        <div className="empty-cart-content__bg-img empty-cart-content__bg_guitar">
          <Image src={guitarImage} alt="" fill />
        </div>
        <div className="empty-cart-content__bg-img empty-cart-content__bg_basket">
          <Image src={basketImage} alt="" fill />
        </div>
      </div>
    </div>
  );
}
export default EmptyCart;
