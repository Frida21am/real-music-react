import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "./apiClient.dto";

function ProductInCart(props: {
  product: Product;
  removeFromOrder: (id: number) => void;
}) {
  return (
    <div className="order-products__item">
      <div className="order-products__item-image">
        <Image src={props.product.frontImg} alt="" fill />
      </div>
      <div className="order-products__item-text">
        <Link
          href={`/catalog/${props.product.slug}`}
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
          <Image src="/images/close.png" alt="" fill />
        </div>
      </div>
    </div>
  );
}
export default ProductInCart;
