import { useContext } from "react";
import useGetProducts, { Product } from "./useGetProducts";
import ProductsInWishlistContext from "../components/context/ProductsInWishlistContext";

function useGetLikedProducts() {
  const products: Product[] = useGetProducts();
  const likedProducts = useContext(ProductsInWishlistContext);
  if (likedProducts == null) {
    return [];
  }
  const filteredProducts: Product[] = [];
  likedProducts.liked.forEach((item: string) => {
    let product = products.find((product) => product.id == item);
    if (product) {
      filteredProducts.push(product);
    }
  });

  if (filteredProducts == null) {
    throw new Error("Data not found!");
  }
  return filteredProducts;
}

export default useGetLikedProducts;
