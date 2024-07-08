/* import { products } from "../data/data"

export type ProductDetails = {
  id: string
  title: string
  description: string
  images: string[]
  price: string
  isInStock: boolean
  descriptionFull: string
  characteristics: { name: string; value: string }[]
}

function useGetProductDetails(productId: number) {

      const details: ProductDetails | undefined = products.find((product) => product.id == productId)
      if (details == null) {
        throw new Error("Data not found!")
      }
      return details
    }

export default useGetProductDetails */
