import { useQuery } from "@tanstack/react-query"
import { filters } from "../data/data"

function useGetFiltersData() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["filters"],
    queryFn: () => {
      return filters
    },
  })

  return { filters: data, isLoading, error }
}

export default useGetFiltersData
