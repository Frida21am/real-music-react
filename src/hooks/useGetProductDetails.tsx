import { useQuery } from "@tanstack/react-query"
import { products } from "../data/data"

export type ProductDetails = {
  id: number
  title: string
  description: string
  images: string[]
  price: string
  isInStock: boolean
  descriptionFull: string
  characteristics: { name: string; value: string }[]
}

function useGetProductDetails(productId: number) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["products", productId],
    queryFn: () => {
      const details: ProductDetails | undefined = products.find((product) => product.id == productId)
      if (details == null) {
        throw new Error("Data not found!")
      }
      return details
    },
  })

  return { productDetails: data, isLoading, error }
}

export default useGetProductDetails
