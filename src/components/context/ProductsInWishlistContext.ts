import { createContext } from "react";

export interface LikedContextParams {
  liked: string[];
  addToLiked: (id: string) => void;
  removeFromLiked: (id: string) => void;
}

const ProductsInWishlistContext = createContext<LikedContextParams | null>(
  null
);

export default ProductsInWishlistContext;
