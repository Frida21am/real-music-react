"use client";

import React from "react";
import { useState } from "react";
import { Pagination, ConfigProvider } from "antd";
import Product from "./Product";
import Filtration, { SelectedFilters } from "../components/Filtration";
import useGetFilteredProducts from "../hooks/useGetFilteredProducts";

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

function ProductsList(props: { selectedFilters: SelectedFilters }) {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    products: productsPage,
    isLoading,
    isError,
    error,
  } = useGetFilteredProducts(currentPage, pageSize, props.selectedFilters);

  if (isLoading) {
    return "загружается...";
  }

  if (productsPage?.products == null) {
    return (
      <div className="no-products">
        <p>Нет товаров</p>
      </div>
    );
  }

  const productsCount = productsPage.totalPages * pageSize;

  return (
    <>
      <div>
        {productsCount != 0 ? (
          <div className="products__row">
            {productsPage.products.map((el) => (
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
          showSizeChanger={false}
          total={productsCount}
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
