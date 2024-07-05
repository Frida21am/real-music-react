import ProductDetailsView from "../components/ProductDetailsView";
import React from "react";
import { graphql, PageProps } from "gatsby";
import { ProductFullQl } from "../entities/ProductFullQL";
import Layout from "../components/layout/Layout";

type productProps = {
  wpgraphql: {
    product: ProductFullQl;
  };
};

function PageProductDetails(props: PageProps<productProps>) {
  const details = props.data.wpgraphql.product;
  return (
    <Layout>
      <div>
        <ProductDetailsView
          product={{
            id: details.id,
            title: details.name,
            description: details.shortDescription,
            descriptionFull: details.description,
            images: details.galleryImages.nodes.map((img) => img.sourceUrl),
            price: details.price,
            isInStock: details.stockStatus == "IN_STOCK",
            characteristics: [],
          }}
        />
      </div>
    </Layout>
  );
}

export const query = graphql`
  fragment ProductContentFull on WPGraphQL_Product {
    id
    databaseId
    slug
    name
    type
    description
    shortDescription(format: RAW)
    image {
      id
      sourceUrl
      altText
    }
    galleryImages {
      nodes {
        id
        sourceUrl
        altText
      }
    }
    productTags(first: 20) {
      nodes {
        id
        slug
        name
      }
    }
    attributes {
      nodes {
        id
        attributeId
        ... on WPGraphQL_LocalProductAttribute {
          name
          options
          variation
        }
        ... on WPGraphQL_GlobalProductAttribute {
          name
          options
          variation
        }
      }
    }
    ... on WPGraphQL_SimpleProduct {
      onSale
      stockStatus
      price
      rawPrice: price(format: RAW)
      regularPrice
      salePrice
      stockStatus
      stockQuantity
      soldIndividually
    }
    ... on WPGraphQL_VariableProduct {
      onSale
      price
      rawPrice: price(format: RAW)
      regularPrice
      salePrice
      stockStatus
      stockQuantity
      soldIndividually
      variations(first: 50) {
        nodes {
          id
          databaseId
          name
          price
          rawPrice: price(format: RAW)
          regularPrice
          salePrice
          onSale
          attributes {
            nodes {
              name
              label
              value
            }
          }
        }
      }
    }
  }

  query ($id: ID!) {
    wpgraphql {
      product(id: $id) {
        ...ProductContentFull
      }
    }
  }
`;

export default PageProductDetails;
