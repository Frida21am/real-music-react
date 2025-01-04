import React, { useContext } from "react";
import useGetProductsInCart from "../hooks/useGetProductsInCart";
import EmptyCart from "./EmptyCart";
import ProductInCart from "../entities/ProductInCart";
import ProductsInOrderContext from "../components/context/ProductsInOrderContext";
import Image from "next/image";
import ReactInputMask from "react-input-mask";

function ShoppingCart(props: {
  isPopupOpen: boolean;
  onPopupClosing: (isPopupOpen: boolean) => void;
}) {
  const { data, isLoading } = useGetProductsInCart();
  return (
    <div className="cart">
      <div
        className={props.isPopupOpen ? "popup__shadow showed" : "popup__shadow"}
        onClick={() => props.onPopupClosing(false)}
      ></div>
      <div
        className={
          props.isPopupOpen ? "popup__content showed" : "popup__content"
        }
      >
        <div className="cart__content">
          <span
            className="popup__close"
            onClick={() => props.onPopupClosing(false)}
          >
            <Image src="/images/close.png" alt="" fill />
          </span>
          {!isLoading && data != null ? (
            data.length != 0 ? (
              <Order />
            ) : (
              <EmptyCart />
            )
          ) : (
            "loading..."
          )}
          {}
        </div>
      </div>
    </div>
  );
}

function Order() {
  const products = useGetProductsInCart();
  const orderedProductsContext = useContext(ProductsInOrderContext);

  return (
    <div className="order">
      <h2 className="order__title">Ваш заказ:</h2>
      <div className="order-products__row">
        {orderedProductsContext
          ? products.map((el) => (
              <ProductInCart
                key={el.id}
                product={el}
                removeFromOrder={orderedProductsContext?.removeFromOrder}
              />
            ))
          : []}
      </div>
      <p className="order-products__sum">Сумма: 6 080р.</p>
      <form action="#" className="order-form">
        <input type="text" name="name" placeholder="Ваше имя" required />
        <ReactInputMask
          mask="+7 999 999 99 99"
          maskChar=" "
          className="tel"
          placeholder="Ваш номер"
          required
        />
        <select name="delivery-method" defaultValue="value2">
          <option value="value1">Выберите способ доставки</option>
          <option value="value2">Самовывоз из нашего магазина</option>
          <option value="value3">Доставка по Москве</option>
          <option value="value3">Доставка СДЭК по всей России</option>
        </select>
        <input
          type="text"
          name="adress"
          placeholder='Ваш адрес (если Вы выбрали самовывоз, то пишите "-"'
          required
        />
        <textarea
          name="message"
          placeholder="Дополнительный комментарий (до 10 строк)"
        ></textarea>
        <button type="submit" className="order-form__btn">
          Отправить заказ
        </button>
      </form>
      <p className="order__caption">
        Заполните и отправьте форму, а мы с Вами свяжемся в ближайшее время
      </p>
    </div>
  );
}

export default ShoppingCart;
