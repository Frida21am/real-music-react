import useGetProducts, { Product } from "./useGetProducts";
import useLocalStorage from "./useLocalStorage";
import { productsInCart } from "../data/data";

function useGetProductsInCart() {
  const products: Product[] = useGetProducts();
  //const productsInCart: Product[] = useLocalStorage([], "order");
  const filteredProducts: Product[] = [];
  productsInCart?.forEach((item) => {
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

export default useGetProductsInCart;
