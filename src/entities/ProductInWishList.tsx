import React from "react";
import { Product } from "../hooks/useGetProducts";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

function ProductInWishList(props: { product: Product }) {
  return (
    <div className="wishlist-products__item">
      <div className="wishlist-products__item-image">
        <img src={props.product.frontImg} alt="" />
      </div>
      <div className="wishlist-products__item-text">
        <span className="wishlist-products__item-price">
          {props.product.price}
        </span>
        <Link
          to={`/catalog/${props.product.slug}`}
          className="wishlist-products__item-title"
        >
          {props.product.title}
        </Link>
      </div>
      <div className="wishlist-products__item-delete">
        <div className="wishlist-products__item-delete_img">
          <StaticImage src="../images/close.png" alt="" />
        </div>
      </div>
    </div>
  );
}
export default ProductInWishList;