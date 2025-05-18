import React, { useContext } from "react";
import Image from "next/image";
import useGetLikedProducts from "../hooks/useGetLikedProducts";
import ProductInWishList from "./ui/popups/ProductInWishList";
import ProductsInWishlistContext from "./context/ProductsInWishlistContext";
import ProductsInOrderContext from "./context/ProductsInOrderContext";
import Link from "next/link";
import closeImage from "@/images/close.png";

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
        <Image src={closeImage} alt="" fill />
      </span>
      <h2 className="wishlist__title">Избранное</h2>
      <div className="wishlist-products">
        {likedProductsContext && orderedProductsContext ? (
          likedProductsContext.liked.length != 0 && products.data ? (
            products.data.map((el) => (
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
              <Link href="/" className="empty-wishlist__button">
                В каталог
              </Link>
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
