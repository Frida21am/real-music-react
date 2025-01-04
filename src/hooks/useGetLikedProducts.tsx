import { useContext } from "react";
import ProductsInWishlistContext from "../components/context/ProductsInWishlistContext";
import useGetProductsByIds from "./useGetProductsByIds";

function useGetLikedProducts() {
  const likedProducts = useContext(ProductsInWishlistContext);

  const products = useGetProductsByIds(likedProducts?.liked ?? []);

  return products;
}

export default useGetLikedProducts;
