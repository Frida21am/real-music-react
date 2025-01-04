import { getSubCategories } from "@/entities/apiClient";
import { useQuery } from "@tanstack/react-query";

function useGetCategories(categoryId: number) {
  const query = useQuery({
    queryKey: ["subCategories", categoryId],
    queryFn: () => getSubCategories(categoryId),
  });

  return {
    subCategories: query.data,
    isLoading: query.isLoading,
  };
}

export default useGetCategories;
