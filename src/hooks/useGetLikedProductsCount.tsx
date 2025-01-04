import { useContext } from "react";
import ProductsInWishlistContext from "../components/context/ProductsInWishlistContext";

function useGetLikedProducts() {
  const likedProducts = useContext(ProductsInWishlistContext);

  return likedProducts?.liked ?? 0;
}

export default useGetLikedProducts;
