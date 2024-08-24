import { createContext } from "react";

export interface OrderedContextParams {
  order: string[];
  addToOrder: (id: string) => void;
  removeFromOrder: (id: string) => void;
}

const ProductsInOrderContext = createContext<OrderedContextParams | null>(null);

export default ProductsInOrderContext;
