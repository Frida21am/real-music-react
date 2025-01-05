import { getAllCategories, getAllCategory } from "@/api/apiClient";
import { useQuery } from "@tanstack/react-query";

function useGetCategories() {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const allCategory = await getAllCategory();
      const allCategories = await getAllCategories(allCategory.id);

      const result = [allCategory, ...allCategories];
      return {
        allCategory,
        categories: result,
      };
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
}

export default useGetCategories;
