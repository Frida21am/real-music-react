import ProductDetailsView from "../components/ProductDetailsView";
import React from "react";
import Layout from "../components/layout/Layout";
import useGetProductById from "../hooks/useGetProductById";
import { PageProps } from "gatsby";

type ProductDetailsContext = {
  id: string;
};

function PageProductDetails(props: PageProps<any, ProductDetailsContext>) {
  const details = useGetProductById(props.pageContext.id);
  console.log(details);
  return (
    <Layout>
      <div>
        <ProductDetailsView product={details} />
      </div>
    </Layout>
  );
}

export default PageProductDetails;
