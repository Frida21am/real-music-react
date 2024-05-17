import { useQuery } from "@tanstack/react-query"
import { categories } from "../data/data"

export type Category = {
  id: number
  title: string
  img: string
}

function useGetCategoriesList() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      const list: Category[] = categories
      if (list == null) {
        throw new Error("Data not found!")
      }
      return list
    },
  })

  return { categoriesList: data, isLoading, error }
}

export default useGetCategoriesList
