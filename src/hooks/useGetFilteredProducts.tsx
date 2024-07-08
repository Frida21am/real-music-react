import { SelectedFilters, SortingType } from "../components/Filtration";
import useGetProducts, { Product } from "./useGetProducts";

function filterProducts(product: Product, selectedFilters: SelectedFilters) {
  if (selectedFilters == null) {
    return true;
  }
  if (selectedFilters.name != null) {
    if (
      !product.title.toLowerCase().includes(selectedFilters.name.toLowerCase())
    ) {
      return false;
    }
  }
  if (selectedFilters.priceRange != null) {
    if (selectedFilters.priceRange.min != null) {
      if (product.priceRaw < selectedFilters.priceRange.min) {
        return false;
      }
    }
    if (selectedFilters.priceRange.max != null) {
      if (product.priceRaw > selectedFilters.priceRange.max) {
        return false;
      }
    }
  }

  if (selectedFilters.category != null) {
    if (!product.categoryIds.some((id) => id == selectedFilters.category)) {
      return false;
    }
  }

  return true;
}

function sortProducts(
  firstProduct: Product,
  secondProduct: Product,
  sorting: SortingType
): number {
  switch (sorting) {
    case "ByNameAsc":
      return firstProduct.title.toUpperCase() >
        secondProduct.title.toUpperCase()
        ? 1
        : -1;
    case "ByNameDesc":
      return firstProduct.title.toUpperCase() <
        secondProduct.title.toUpperCase()
        ? 1
        : -1;
    case "ByPriceAsk":
      return firstProduct.price > secondProduct.price ? 1 : -1;
    case "ByPriceDesc":
      return firstProduct.price < secondProduct.price ? 1 : -1;
    case "ByListingTimeAsc":
      return firstProduct.listingTime > secondProduct.listingTime ? 1 : -1;
    case "ByListingTimeDesc":
      return firstProduct.listingTime < secondProduct.listingTime ? 1 : -1;
    default:
      return 0;
  }
}

function useGetFilteredProducts(
  currentPage: number,
  pageSize: number,
  selectedFilters: SelectedFilters
) {
  const firstProductIndex = (currentPage - 1) * pageSize;
  const lastProductIndex = firstProductIndex + pageSize;
  const products: Product[] = useGetProducts();
  const allProducts: Product[] = products
    .filter((product) => filterProducts(product, selectedFilters))
    .sort((firstProduct, secondProduct) =>
      sortProducts(firstProduct, secondProduct, selectedFilters.sorting)
    );
  const productsCount: number = allProducts.length;
  const productsOnPage: Product[] = allProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  if (allProducts == null) {
    throw new Error("Data not found!");
  }
  return { productsCount, productsOnPage };
}

export default useGetFilteredProducts;
