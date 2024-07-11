import { SelectedFilters, SortingType } from "../components/Filtration";
import { ProductQl } from "../entities/ProductFullQL";
import { graphql, useStaticQuery } from "gatsby";

const GET_PRODUCTS = graphql`
  fragment ProductContentShort on WPGraphQL_Product {
    id
    databaseId
    slug
    name
    description(format: RAW)
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
    productCategories {
      nodes {
        id
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
        ... on WPGraphQL_LocalProductAttribute {
          label
          options
          variation
        }
        ... on WPGraphQL_GlobalProductAttribute {
          label
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
      modified
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

  {
    wpgraphql {
      products {
        edges {
          node {
            ...ProductContentShort
          }
        }
      }
    }
  }
`;

type productsQuery = {
  wpgraphql: {
    products: {
      edges: {
        node: ProductQl;
      }[];
    };
  };
};

export type Product = {
  id: string;
  description: string;
  descriptionShort: string;
  images: string[];
  title: string;
  frontImg: string;
  backImg: string;
  price: string;
  priceRaw: number;
  listingTime: Date;
  bestseller: boolean;
  categoryIds: string[];
  slug: string;
  isInStock: boolean;
  characteristics: { name: string; value: string }[];
};

function useGetProducts() {
  const products: Product[] = useStaticQuery<productsQuery>(GET_PRODUCTS)
    .wpgraphql.products.edges.map((e) => e.node)
    .map((pql) => {
      return {
        id: pql.id,
        title: pql.name,
        frontImg: pql.image?.sourceUrl,
        backImg: pql.image?.sourceUrl,
        price: decodeURI(pql.price),
        description: pql.description,
        descriptionShort: pql.shortDescription,
        bestseller: false,
        slug: pql.slug,
        priceRaw: pql.rawPrice,
        listingTime: new Date(pql.modified),
        categoryIds: pql.productCategories.nodes.map((category) => category.id),
        characteristics:
          pql.attributes?.nodes.map((attr) => {
            return {
              name: attr.label,
              value: attr.options[0],
            };
          }) ?? [],
        images: pql.galleryImages.nodes.map((img) => img.sourceUrl),
        isInStock: pql.stockStatus == "IN_STOCK",
      };
    });

  return products;
}

export default useGetProducts;
