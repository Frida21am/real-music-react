import { SelectedFilters, SortingType } from "../components/Filtration";
import { ProductCatalogItemQl } from "../entities/ProductFullQL";
import { graphql, useStaticQuery } from "gatsby";

type productsQuery = {
  wpgraphql: {
    products: {
      edges: {
        node: ProductCatalogItemQl;
      }[];
    };
  };
};

export type Product = {
  id: string;
  title: string;
  frontImg: string;
  backImg: string;
  price: string;
  priceRaw: number;
  listingTime: Date;
  bestseller: boolean;
  categoryIds: string[];
  slug: string
};

function filterProducts(product: Product, selectedFilters: SelectedFilters) {
  if (selectedFilters == null) {
    return true;
  }
  if (selectedFilters.name != null) {
    if (
      !product.title.toLowerCase().includes(selectedFilters.name.toLowerCase())
    ) {
      return false;
    }
  }
  if (selectedFilters.priceRange != null) {
    if (selectedFilters.priceRange.min != null) {
      if (product.priceRaw < selectedFilters.priceRange.min) {
        return false;
      }
    }
    if (selectedFilters.priceRange.max != null) {
      if (product.priceRaw > selectedFilters.priceRange.max) {
        return false;
      }
    }
  }

  if (selectedFilters.category != null) {
    if ( !product.categoryIds.some(id=> id == selectedFilters.category)) {
      return false;
    }
  }

  return true;
}

function sortProducts(
  firstProduct: Product,
  secondProduct: Product,
  sorting: SortingType
): number {
  switch (sorting) {
    case "ByNameAsc":
      return firstProduct.title.toUpperCase() >
        secondProduct.title.toUpperCase()
        ? 1
        : -1;
    case "ByNameDesc":
      return firstProduct.title.toUpperCase() <
        secondProduct.title.toUpperCase()
        ? 1
        : -1;
    case "ByPriceAsk":
      return firstProduct.price > secondProduct.price ? 1 : -1;
    case "ByPriceDesc":
      return firstProduct.price < secondProduct.price ? 1 : -1;
    case "ByListingTimeAsc":
      return firstProduct.listingTime > secondProduct.listingTime ? 1 : -1;
    case "ByListingTimeDesc":
      return firstProduct.listingTime < secondProduct.listingTime ? 1 : -1;
    default:
      return 0;
  }
}

function useGetProductsList(
  currentPage: number,
  pageSize: number,
  selectedFilters: SelectedFilters
) {
  const firstProductIndex = (currentPage - 1) * pageSize;
  const lastProductIndex = firstProductIndex + pageSize;
  const products: Product[] = useStaticQuery<productsQuery>(graphql`
fragment ProductContentShort on WPGraphQL_Product {
  id
  databaseId
  slug
  name
  shortDescription(format: RAW)
  image {
    id
    sourceUrl
    altText
  }
  productCategories{
    nodes{
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
  `)
    .wpgraphql.products.edges.map((e) => e.node)
    .map((pql) => {
      return {
        id: pql.id,
        title: pql.name,
        frontImg: pql.image?.sourceUrl,
        backImg: pql.image?.sourceUrl,
        price: decodeURI(pql.price),
        bestseller: false,
        slug: pql.slug,
        priceRaw: pql.rawPrice,
        listingTime: new Date(pql.modified),   
        categoryIds: pql.productCategories.nodes.map(category => category.id)
      };
    });
  const allProducts: Product[] = products
    .filter((product) => filterProducts(product, selectedFilters))
    .sort((firstProduct, secondProduct) =>
      sortProducts(firstProduct, secondProduct, selectedFilters.sorting)
    );
  const productsCount: number = allProducts.length;
  const productsOnPage: Product[] = allProducts.slice(
    firstProductIndex,
    lastProductIndex
  );

  if (allProducts == null) {
    throw new Error("Data not found!");
  }
  return { productsCount, productsOnPage };
}

export default useGetProductsList;
