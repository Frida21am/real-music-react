import { useContext } from "react";
import useGetProducts, { Product } from "./useGetProducts";
import ProductsInOrderContext from "../components/context/ProductsInOrderContext";

function useGetProductsInCart() {
  const products: Product[] = useGetProducts();
  const productsInCart = useContext(ProductsInOrderContext);
  if (productsInCart == null) {
    return [];
  }
  const filteredProducts: Product[] = [];
  productsInCart.order.forEach((item: string) => {
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
