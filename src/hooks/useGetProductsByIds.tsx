import { getProductsByIds } from "@/api/apiClient";
import { useQuery } from "@tanstack/react-query";

function useGetProductsByIds(ids: number[]) {
  const query = useQuery({
    queryKey: ["productsByIds", ids],
    queryFn: () => getProductsByIds(ids),
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
}

export default useGetProductsByIds;
