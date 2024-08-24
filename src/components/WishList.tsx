import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import useGetLikedProducts from "../hooks/useGetLikedProducts";
import ProductInWishList from "../entities/ProductInWishList";
import ProductsInWishlistContext from "./context/ProductsInWishlistContext";
import ProductsInOrderContext from "./context/ProductsInOrderContext";

function WishList(props: {
  isWishListOpen: boolean;
  onWishListClosing: (isWishListOpen: boolean) => void;
}) {
  const products = useGetLikedProducts();
  const likedProductsContext = useContext(ProductsInWishlistContext);
  const orderedProductsContext = useContext(ProductsInOrderContext);

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
        {likedProductsContext && orderedProductsContext
          ? products.map((el) => (
              <ProductInWishList
                key={el.id}
                product={el}
                addToOrder={orderedProductsContext.addToOrder}
                removeFromLiked={likedProductsContext.removeFromLiked}
              />
            ))
          : []}
      </div>
    </div>
  );
}

export default WishList;
