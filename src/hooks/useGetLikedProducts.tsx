import useGetProducts, { Product } from "./useGetProducts";
import useLocalStorage from "./useLocalStorage";
import { likedProducts } from "../data/data";

function useGetLikedProducts() {
  const products: Product[] = useGetProducts();
  //const likedProducts: Product[] = useLocalStorage([], "order");
  const filteredProducts: Product[] = [];
  likedProducts?.forEach((item) => {
    //let product = products.find((product) => product.id == item.id);
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
