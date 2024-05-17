import { ConfigProvider, Select } from "antd"
import { Input } from "antd"
import FilterPrice from "./FilterPrice"
import useGetFiltersData from "../hooks/useGetFiltersData"
import Categories from "../entities/Categories"

export type SelectedFilters = {
  name?: string
  brand?: string[]
  priceRange?: SelectedFiltersPrice
  sorting: SortingType
  category?: number
}

export type SelectedFiltersPrice = {
  min?: number
  max?: number
}

export type SortingType =
  | "ByPriceAsk"
  | "ByPriceDesc"
  | "ByNameAsc"
  | "ByNameDesc"
  | "ByListingTimeAsc"
  | "ByListingTimeDesc"

const { Search } = Input

function Filtration(props: {
  selectedFilters: SelectedFilters
  onFiltersChanged: (newFilters: SelectedFilters) => void
}) {
  const { filters, isLoading } = useGetFiltersData()
  if (isLoading) {
    return <span>Загрузка...</span>
  }
  return (
    <>
      <Categories
        selectedCategory={props.selectedFilters.category}
        onSelectedCategoryChanged={(newSelectedCategory) => {
          props.onFiltersChanged({
            ...props.selectedFilters,
            category: newSelectedCategory,
          })
        }}
      />
      <div className="filters">
        <h2 className="filters__title">Все</h2>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                optionSelectedBg: "rgba(252, 168, 73, 0.279)",
                controlOutline: "rgba(252, 168, 73, 0.279)",
                colorPrimary: "#eb971a",
                colorPrimaryHover: "#eb971a",
              },
              Input: {
                activeBorderColor: "#eb971a",
                activeShadow: "rgba(252, 168, 73, 0.279)",
                hoverBorderColor: "#eb971a",
                colorPrimary: "#eb971a",
                colorPrimaryActive: "#eb971a",
                colorPrimaryHover: "#eb971a",
                colorSplit: "#eb971a",
              },
            },
          }}
        >
          <div className="filters__row">
            <div>
              <div>
                <Select
                  className="filters-left__item filters-brand"
                  placeholder={<span style={{ color: "#222" }}>Бренд</span>}
                  mode="multiple"
                  allowClear
                  onChange={(selectedOptions) => {
                    props.onFiltersChanged({
                      ...props.selectedFilters,
                      brand: selectedOptions.length != 0 ? selectedOptions : undefined,
                    })
                  }}
                  disabled={filters?.optionsBrand?.length == 0}
                  options={filters?.optionsBrand}
                  defaultValue={props.selectedFilters?.brand}
                />

                <FilterPrice
                  priceFilter={props.selectedFilters?.priceRange}
                  onPriceFilterChanged={(newPriceFilter) => {
                    props.onFiltersChanged({
                      ...props.selectedFilters,
                      priceRange: newPriceFilter,
                    })
                  }}
                />
              </div>
            </div>

            <div>
              <div>
                <Search
                  className="filter-right__item"
                  placeholder="Поиск"
                  allowClear
                  style={{ width: 200 }}
                  onChange={(e) => {
                    props.onFiltersChanged({
                      ...props.selectedFilters,
                      name: e.target.value != "" ? e.target.value : undefined,
                    })
                  }}
                  defaultValue={props.selectedFilters?.name}
                />

                <Select
                  className="filters-right__item"
                  defaultValue={props.selectedFilters.sorting}
                  disabled={filters?.optionsOrder?.length == 0}
                  options={filters?.optionsOrder}
                  onChange={(newSortingType) => {
                    props.onFiltersChanged({
                      ...props.selectedFilters,
                      sorting: newSortingType,
                    })
                  }}
                />
              </div>
            </div>
          </div>
        </ConfigProvider>
      </div>
    </>
  )
}

export default Filtration
