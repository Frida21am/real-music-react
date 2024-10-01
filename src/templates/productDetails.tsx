import React from "react";
import { PageProps } from "gatsby";
import ProductDetailsView from "../components/ProductDetailsView";
import Layout from "../components/layout/Layout";
import useGetProductById from "../hooks/useGetProductById";

type ProductDetailsContext = {
  id: string;
};

function PageProductDetails(props: PageProps<any, ProductDetailsContext>) {
  const details = useGetProductById(props.pageContext.id);
  return (
    <Layout>
      <div>
        <ProductDetailsView product={details} />
      </div>
    </Layout>
  );
}

export default PageProductDetails;
