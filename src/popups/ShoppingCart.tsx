import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import InputMask from "react-input-mask";
import useGetProductsInCart from "../hooks/useGetProductsInCart";
import EmptyCart from "./EmptyCart";
import ProductInCart from "../entities/ProductInCart";
import useLocalStorage from "../hooks/useLocalStorage";

function ShoppingCart(props: {
  isPopupOpen: boolean;
  onPopupClosing: (isPopupOpen: boolean) => void;
}) {
  const products = useGetProductsInCart();
  return (
    <div className="cart">
      <div
        className={props.isPopupOpen ? "popup__shadow showed" : "popup__shadow"}
        onClick={() => props.onPopupClosing(false)}
      >
        <span
          className="popup__close"
          onClick={() => props.onPopupClosing(false)}
        >
          <StaticImage src="../images/close.png" alt="" />
        </span>
      </div>
      <div
        className={
          props.isPopupOpen ? "popup__content showed" : "popup__content"
        }
      >
        <div className="cart__content">
          {products.length != 0 ? <Order /> : <EmptyCart />}
        </div>
      </div>
    </div>
  );
}

function Order() {
  const products = useGetProductsInCart();

  const [order, setOrder] = useLocalStorage([], "order");
  const removeFromOrder = (id: string) => {
    setOrder((oldOrder: string[]) => oldOrder.filter((item) => item !== id));
  };

  return (
    <div className="order">
      <h2 className="order__title">Ваш заказ:</h2>
      <div className="order-products__row">
        {products.map((el) => (
          <ProductInCart
            key={el.id}
            product={el}
            removeFromOrder={removeFromOrder}
          />
        ))}
      </div>
      <p className="order-products__sum">Сумма: 6 080р.</p>
      <form action="#" className="order-form">
        <input type="text" name="name" placeholder="Ваше имя" required />
        <InputMask
          mask="+7 999 999 99 99"
          maskChar=" "
          className="tel"
          placeholder="Ваш номер"
          required
        />
        <select name="delivery-method">
          <option value="value1">Выберите способ доставки</option>
          <option value="value2" selected>
            Самовывоз из нашего магазина
          </option>
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
