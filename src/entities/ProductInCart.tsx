import React from "react";
import { Product } from "../hooks/useGetProducts";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function ProductInCart(props: {
  product: Product;
  removeFromOrder: (id: string) => void;
}) {
  return (
    <div className="order-products__item">
      <div className="order-products__item-image">
        <img src={props.product.frontImg} alt="" />
      </div>
      <div className="order-products__item-text">
        <Link
          to={`/catalog/${props.product.slug}`}
          className="order-products__item-title"
        >
          {props.product.title}
        </Link>
        <span className="order-products__item-price">
          {props.product.price}
        </span>
      </div>
      <div
        className="order-products__item-close"
        onClick={() => props.removeFromOrder(props.product.id)}
      >
        <div className="order-products__item-close_img">
          <StaticImage src="../images/close.png" alt="" placeholder="none" />
        </div>
      </div>
    </div>
  );
}
export default ProductInCart;
