import { useContext } from "react";
import ProductsInOrderContext from "../components/context/ProductsInOrderContext";

function useGetProductsInCart() {
  const productsInCart = useContext(ProductsInOrderContext);
  return productsInCart?.order.length ?? 0;
}

export default useGetProductsInCart;
