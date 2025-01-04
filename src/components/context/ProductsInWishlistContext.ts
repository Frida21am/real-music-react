"use client";

import { createContext } from "react";

export interface LikedContextParams {
  liked: number[];
  addToLiked: (id: number) => void;
  removeFromLiked: (id: number) => void;
}

const ProductsInWishlistContext = createContext<LikedContextParams | null>(
  null
);

export default ProductsInWishlistContext;
