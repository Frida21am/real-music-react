"use client";

import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import ProductsInOrderContext from "./context/ProductsInOrderContext";
import ProductsInWishlistContext from "./context/ProductsInWishlistContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function ContextProviders({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [liked, setLike] = useLocalStorage([], "like");
  const addToLiked = (id: number) => {
    if (!liked.includes(id)) {
      setLike((oldLiked: number[]) => [...oldLiked, id]);
    }
  };
  const removeFromLiked = (id: number) => {
    setLike((oldLiked: number[]) => oldLiked.filter((item) => item !== id));
  };

  const [order, setOrder] = useLocalStorage([], "order");
  const addToOrder = (id: number) => {
    if (!order.includes(id)) {
      setOrder((oldOrder: number[]) => [...oldOrder, id]);
    }
  };
  const removeFromOrder = (id: number) => {
    setOrder((oldOrder: number[]) => oldOrder.filter((item) => item !== id));
  };

  const value = {
    liked,
    addToLiked,
    removeFromLiked,
    order,
    addToOrder,
    removeFromOrder,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ProductsInOrderContext.Provider value={value}>
        <ProductsInWishlistContext.Provider value={value}>
          {children}
        </ProductsInWishlistContext.Provider>
      </ProductsInOrderContext.Provider>
    </QueryClientProvider>
  );
}

export default ContextProviders;
