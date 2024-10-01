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
        <StaticImage src="../images/close.png" alt="" placeholder="none" />
      </span>
      <h2 className="wishlist__title">Избранное</h2>
      <div className="wishlist-products">
        {likedProductsContext && orderedProductsContext ? (
          likedProductsContext.liked.length != 0 ? (
            products.map((el) => (
              <ProductInWishList
                key={el.id}
                product={el}
                addToOrder={orderedProductsContext.addToOrder}
                removeFromLiked={likedProductsContext.removeFromLiked}
              />
            ))
          ) : (
            <div className="empty-wishlist">
              <p className="empty-wishlist__caption">
                В Избранном пока нет товаров
              </p>
              <a href="/" className="empty-wishlist__button">
                В каталог
              </a>
            </div>
          )
        ) : (
          []
        )}
      </div>
    </div>
  );
}

export default WishList;
