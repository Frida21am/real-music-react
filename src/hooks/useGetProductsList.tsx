import { useQuery } from "@tanstack/react-query"
import { products } from "../data/data"
import { SelectedFilters, SortingType } from "../components/Filtration"

export type Product = {
  id: number
  title: string
  frontImg: string
  backImg: string
  price: number
  brand: string
  listingTime: Date
  bestseller: boolean
  categoryId: number
}

function filterProducts(product: Product, selectedFilters: SelectedFilters) {
  if (selectedFilters == null) {
    return true
  }
  if (selectedFilters.name != null) {
    if (!product.title.includes(selectedFilters.name)) {
      return false
    }
  }
  if (selectedFilters.brand != null) {
    if (!selectedFilters.brand.some((filterValue) => filterValue == product.brand)) {
      return false
    }
  }
  if (selectedFilters.priceRange != null) {
    if (selectedFilters.priceRange.min != null) {
      if (product.price < selectedFilters.priceRange.min) {
        return false
      }
    }
    if (selectedFilters.priceRange.max != null) {
      if (product.price > selectedFilters.priceRange.max) {
        return false
      }
    }
  }

  if (selectedFilters.category != null) {
    if (selectedFilters.category != product.categoryId) {
      return false
    }
  }

  return true
}

function sortProducts(firstProduct: Product, secondProduct: Product, sorting: SortingType): number {
  switch (sorting) {
    case "ByNameAsc":
      return firstProduct.title.toUpperCase() > secondProduct.title.toUpperCase() ? 1 : -1
    case "ByNameDesc":
      return firstProduct.title.toUpperCase() < secondProduct.title.toUpperCase() ? 1 : -1
    case "ByPriceAsk":
      return firstProduct.price > secondProduct.price ? 1 : -1
    case "ByPriceDesc":
      return firstProduct.price < secondProduct.price ? 1 : -1
    case "ByListingTimeAsc":
      return firstProduct.listingTime > secondProduct.listingTime ? 1 : -1
    case "ByListingTimeDesc":
      return firstProduct.listingTime < secondProduct.listingTime ? 1 : -1
    default:
      return 0
  }
}

function useGetProductsList(currentPage: number, pageSize: number, selectedFilters: SelectedFilters) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products", currentPage, selectedFilters],
    queryFn: () => {
      const firstProductIndex = (currentPage - 1) * pageSize
      const lastProductIndex = firstProductIndex + pageSize
      const allProducts: Product[] = products
        .filter((product) => product.isInStock == true)
        .filter((product) => filterProducts(product, selectedFilters))
        .sort((firstProduct, secondProduct) => sortProducts(firstProduct, secondProduct, selectedFilters.sorting))
      const productsCount: number = allProducts.length
      const productsOnPage: Product[] = allProducts.slice(firstProductIndex, lastProductIndex)

      if (allProducts == null) {
        throw new Error("Data not found!")
      }
      return { productsCount, productsOnPage }
    },
    refetchOnWindowFocus: false,
  })

  return { productsPage: data, isLoading, error }
}

export default useGetProductsList
