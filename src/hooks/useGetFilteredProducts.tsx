import { SelectedFilters, SortingType } from "../components/Filtration";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/entities/apiClient";

function getFilter(selectedFilters: SelectedFilters) {
  if (selectedFilters == null) {
    return {};
  }

  return {
    search: selectedFilters.name,
    min_price: selectedFilters.priceRange?.min,
    max_price: selectedFilters.priceRange?.max,
    category:
      selectedFilters.subCategory != null
        ? selectedFilters.subCategory.id
        : selectedFilters.category?.id,
  };
}

function getSort(sorting: SortingType) {
  switch (sorting) {
    case "ByNameAsc":
      return {
        order: "asc",
        orderBy: "title",
      };
    case "ByNameDesc":
      return {
        order: "desc",
        orderBy: "title",
      };
    case "ByPriceAsk":
      return {
        order: "asc",
        orderBy: "price",
      };
    case "ByPriceDesc":
      return {
        order: "desc",
        orderBy: "price",
      };
    case "ByListingTimeAsc":
      return {
        order: "asc",
        orderBy: "modified",
      };
    case "ByListingTimeDesc":
      return {
        order: "desc",
        orderBy: "modified",
      };
    default:
      return 0;
  }
}

function useGetFilteredProducts(
  currentPage: number,
  pageSize: number,
  selectedFilters: SelectedFilters
) {
  const filter = {
    ...getFilter(selectedFilters),
    ...getSort(selectedFilters.sorting),
    page: currentPage,
    per_page: pageSize,
  };

  const query = useQuery({
    queryKey: ["products", JSON.stringify(filter)],
    queryFn: async () => await getAllProducts(filter),
  });

  return {
    products: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
  };
}

export default useGetFilteredProducts;
