import useGetProducts, { Product } from "./useGetProducts";
import useLocalStorage from "./useLocalStorage";

function useGetProductsInCart() {
  const products: Product[] = useGetProducts();
  const [productsInCart] = useLocalStorage([], "order");
  const filteredProducts: Product[] = [];
  productsInCart?.forEach((item: string) => {
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
