import useGetProducts, { Product } from "./useGetProducts";

function useGetProductById(
  id: string
) {
  
  const products: Product[] = useGetProducts();
  const searchedProduct= products.find(product => product.id == id)

  if (searchedProduct == null) {
    throw new Error("Data not found!");
  }
  return searchedProduct;
}

export default useGetProductById;
