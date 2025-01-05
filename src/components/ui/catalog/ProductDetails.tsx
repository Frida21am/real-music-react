"use client";

import useGetProductById from "@/hooks/useGetProductById";
import ProductDetailsView from "./ProductDetailsView";

export default function ProductDetails({ id }: { id: number }) {
  const { data, isLoading } = useGetProductById(id);

  if (isLoading) {
    return "загружается...";
  }

  if (data == null) {
    return "Ошибка";
  }

  return <ProductDetailsView product={data} />;
}
