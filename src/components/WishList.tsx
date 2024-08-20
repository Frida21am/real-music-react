import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import useGetLikedProducts from "../hooks/useGetLikedProducts";
import ProductInWishList from "../entities/ProductInWishList";

function WishList(props: {
  isWishListOpen: boolean;
  onWishListClosing: (isWishListOpen: boolean) => void;
}) {
  const products = useGetLikedProducts();
  return (
    <div className={props.isWishListOpen ? "wishlist showed" : "wishlist"}>
      <span
        className="wishlist__close"
        onClick={() => props.onWishListClosing(false)}
      >
        <StaticImage src="../images/close.png" alt="" />
      </span>
      <h2 className="wishlist__title">Избранное</h2>
      <div className="wishlist-products">
        {products.map((el) => (
          <ProductInWishList key={el.id} product={el} />
        ))}
      </div>
    </div>
  );
}

export default WishList;
