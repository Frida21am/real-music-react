import useGetProducts, { Product } from "./useGetProducts";
import useLocalStorage from "./useLocalStorage";

function useGetLikedProducts() {
  const products: Product[] = useGetProducts();
  const [likedProducts] = useLocalStorage([], "like");
  const filteredProducts: Product[] = [];
  likedProducts?.forEach((item: string) => {
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
