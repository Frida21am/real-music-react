import ProductDetails from "@/components/ProductDetails";

async function Page({ params }: { params: Promise<{ id: number }> }) {
  return <ProductDetails id={(await params).id} />;
}

export default Page;
