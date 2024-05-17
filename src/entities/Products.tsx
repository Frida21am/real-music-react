import { useState } from "react"
import useGetProductsList from "../hooks/useGetProductsList"
import Product from "./Product"
import { Pagination, ConfigProvider } from "antd"
import Filtration, { SelectedFilters } from "../components/Filtration"

const pageSize = 4

function Products() {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({ sorting: "ByListingTimeDesc" })

  return (
    <div className="products" id="catalog">
      <Filtration selectedFilters={selectedFilters} onFiltersChanged={setSelectedFilters} />
      <ProductsList selectedFilters={selectedFilters} />
    </div>
  )
}

function ProductsList(props: { selectedFilters: SelectedFilters }) {
  const [currentPage, setCurrentPage] = useState(1)
  const { productsPage, isLoading } = useGetProductsList(currentPage, pageSize, props.selectedFilters)

  if (productsPage == null) {
    return (
      <div className="no-products">
        <p>Нет товаров</p>
      </div>
    )
  }
  if (isLoading) {
    return <span>Загрузка...</span>
  }
  return (
    <>
      <div className="container">
        <div className="products__row">
          {productsPage.productsOnPage.length != 0 ? (
            productsPage.productsOnPage.map((el) => <Product key={el.id} item={el} />)
          ) : (
            <div className="no-products">
              <p>Нет товаров по такому фильтру</p>
            </div>
          )}
        </div>
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
          total={productsPage.productsCount}
          current={currentPage}
          onChange={(newCurrentPage: number) => {
            setCurrentPage(newCurrentPage)
          }}
        />
      </ConfigProvider>
    </>
  )
}

export default Products
