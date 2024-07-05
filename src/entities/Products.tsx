import { useState } from "react";
import useGetProductsList from "../hooks/useGetProductsList";
import Product from "./Product";
import { Pagination, ConfigProvider } from "antd";
import Filtration, { SelectedFilters } from "../components/Filtration";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { ProductCatalogItemQl } from "./ProductFullQL";

const pageSize = 12;

function Products() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    sorting: "ByListingTimeDesc",
  });

  return (
    <div className="products" id="catalog">
      <Filtration
        selectedFilters={selectedFilters}
        onFiltersChanged={setSelectedFilters}
      />
      <ProductsList selectedFilters={selectedFilters} />
    </div>
  );
}

type productsQuery = {
  wpgraphql: {
    products: {
      edges: {
        node: ProductCatalogItemQl;
      }[];
    };
  };
};

function ProductsList(props: { selectedFilters: SelectedFilters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPage = useStaticQuery<productsQuery>(graphql`
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

    {
      wpgraphql {
        products {
          edges {
            node {
              ...ProductContentFull
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
        price: pql.price,
        bestseller: false,
        slug: pql.slug,
      };
    });

  if (productsPage == null) {
    return (
      <div className="no-products">
        <p>Нет товаров</p>
      </div>
    );
  }
  return (
    <>
      <div>
        {productsPage.length != 0 ? (
          <div className="products__row">
            {productsPage.map((el) => (
              <Product key={el.id} item={el} />
            ))}
          </div>
        ) : (
          <div className="no-products">
            <p>Нет товаров по такому фильтру</p>
          </div>
        )}
      </div>

      <ConfigProvider
        theme={{
          components: {
            Pagination: {
              colorPrimary: "#eb971a",
              colorPrimaryHover: "#eb971a",
            },
          },
        }}
      >
        <Pagination
          className="catalog__pagination"
          defaultCurrent={1}
          pageSize={pageSize}
          total={productsPage.length}
          current={currentPage}
          onChange={(newCurrentPage: number) => {
            setCurrentPage(newCurrentPage);
          }}
        />
      </ConfigProvider>
    </>
  );
}

export default Products;
