import useGetProducts, { Product } from "./useGetProducts";

function useGetProductsInCart(productsInCart: string[] | undefined) {
  const products: Product[] = useGetProducts();
  const filteredProducts: Product[] = [];
  productsInCart?.forEach((item) => {
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
