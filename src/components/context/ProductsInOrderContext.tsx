"use client";

import { createContext } from "react";

export interface OrderedContextParams {
  order: number[];
  addToOrder: (id: number) => void;
  removeFromOrder: (id: number) => void;
}

const ProductsInOrderContext = createContext<OrderedContextParams | null>(null);

export default ProductsInOrderContext;
