import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import useGetLikedProducts from "../hooks/useGetLikedProducts";
import ProductInWishList from "../entities/ProductInWishList";
import useLocalStorage from "../hooks/useLocalStorage";

function WishList(props: {
  isWishListOpen: boolean;
  onWishListClosing: (isWishListOpen: boolean) => void;
}) {
  const products = useGetLikedProducts();

  const [like, setLike] = useLocalStorage([], "like");
  const removeFromLiked = (id: string) => {
    setLike((oldLiked: string[]) => oldLiked.filter((item) => item !== id));
  };

  const [order, setOrder] = useLocalStorage([], "order");
  const addToOrder = (id: string) => {
    if (!order.includes(id)) {
      setOrder((oldOrder: string[]) => [...oldOrder, id]);
      removeFromLiked(id);
    }
  };

  const removeFromOrder = (id: string) => {
    setOrder((oldOrder: string[]) => oldOrder.filter((item) => item !== id));
  };

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
          <ProductInWishList
            key={el.id}
            product={el}
            addToOrder={addToOrder}
            removeFromLiked={removeFromLiked}
          />
        ))}
      </div>
    </div>
  );
}

export default WishList;
