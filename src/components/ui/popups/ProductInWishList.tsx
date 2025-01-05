import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../api/apiClient.dto";

function ProductInWishList(props: {
  product: Product;
  addToOrder: (id: number) => void;
  removeFromLiked: (id: number) => void;
}) {
  return (
    <div className="wishlist-products__item">
      <div className="wishlist-products__item-image">
        <Image src={props.product.frontImg} alt="" />
      </div>
      <div className="wishlist-products__item-text">
        <span className="wishlist-products__item-price">
          {props.product.price}
        </span>
        <Link
          href={`/catalog/${props.product.slug}`}
          className="wishlist-products__item-title"
        >
          {props.product.title}
        </Link>
      </div>
      <button
        className="wishlist-products__item-button"
        onClick={() => {
          props.addToOrder(props.product.id);
          props.removeFromLiked(props.product.id);
        }}
      >
        В корзину
      </button>
      <div
        className="wishlist-products__item-delete"
        onClick={() => {
          props.removeFromLiked(props.product.id);
        }}
      >
        <div className="wishlist-products__item-delete_img">
          <Image src="/images/close.png" alt="" fill />
        </div>
      </div>
    </div>
  );
}
export default ProductInWishList;
