import { useContext } from "react";
import ProductsInOrderContext from "../components/context/ProductsInOrderContext";
import useGetProductsByIds from "./useGetProductsByIds";

function useGetProductsInCart() {
  const productsInCart = useContext(ProductsInOrderContext);
  const products = useGetProductsByIds(productsInCart?.order ?? []);
  return products;
}

export default useGetProductsInCart;
