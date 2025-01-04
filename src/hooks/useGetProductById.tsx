import { getProductById } from "@/entities/apiClient";
import { useQuery } from "@tanstack/react-query";

function useGetProductById(id: number) {
  const query = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id),
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
  };
}

export default useGetProductById;
