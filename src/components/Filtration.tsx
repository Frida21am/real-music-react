import { ConfigProvider, Select } from "antd";
import { Input } from "antd";
import FilterPrice from "./FilterPrice";
import Categories from "../entities/Categories";
import React from "react";

export type SelectedFilters = {
  name?: string;
  priceRange?: SelectedFiltersPrice;
  sorting: SortingType;
  category?: string;
};

export type SelectedFiltersPrice = {
  min?: number;
  max?: number;
};

export type SortingType =
  | "ByPriceAsk"
  | "ByPriceDesc"
  | "ByNameAsc"
  | "ByNameDesc"
  | "ByListingTimeAsc"
  | "ByListingTimeDesc";

const { Search } = Input;

const optionsOrder = [
  {
    value: "ByListingTimeDesc",
    label: "Порядок: сперва новые",
  },
  {
    value: "ByListingTimeAsc",
    label: "Порядок: сперва старые",
  },
  {
    value: "ByPriceAsk",
    label: "Цена: по возрастанию",
  },
  {
    value: "ByPriceDesc",
    label: "Цена: по убыванию",
  },
  {
    value: "ByNameAsc",
    label: "Название: А—Я",
  },
  {
    value: "ByNameDesc",
    label: "Название: Я—А",
  },
];

function Filtration(props: {
  selectedFilters: SelectedFilters;
  onFiltersChanged: (newFilters: SelectedFilters) => void;
}) {
  return (
    <>
      <Categories
        selectedCategory={props.selectedFilters.category}
        onSelectedCategoryChanged={(newSelectedCategory) => {
          props.onFiltersChanged({
            ...props.selectedFilters,
            category: newSelectedCategory,
          });
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
                fontSize: 15,
              },
              Input: {
                activeBorderColor: "#eb971a",
                activeShadow: "rgba(252, 168, 73, 0.279)",
                hoverBorderColor: "#eb971a",
                colorPrimary: "#eb971a",
                colorPrimaryActive: "#eb971a",
                colorPrimaryHover: "#eb971a",
                colorSplit: "#eb971a",
                inputFontSize: 16,
                fontSizeIcon: 14,
              },
            },
          }}
        >
          <div className="filters__row">
            <FilterPrice
              priceFilter={props.selectedFilters?.priceRange}
              onPriceFilterChanged={(newPriceFilter) => {
                props.onFiltersChanged({
                  ...props.selectedFilters,
                  priceRange: newPriceFilter,
                });
              }}
            />
            <Search
              className="filters-item"
              placeholder="Поиск"
              allowClear
              style={{ width: 200 }}
              onChange={(e) => {
                props.onFiltersChanged({
                  ...props.selectedFilters,
                  name: e.target.value != "" ? e.target.value : undefined,
                });
              }}
              defaultValue={props.selectedFilters?.name}
            />

            <Select
              className="filters-item"
              defaultValue={props.selectedFilters.sorting}
              disabled={optionsOrder?.length == 0}
              options={optionsOrder}
              onChange={(newSortingType) => {
                props.onFiltersChanged({
                  ...props.selectedFilters,
                  sorting: newSortingType,
                });
              }}
            />
          </div>
        </ConfigProvider>
      </div>
    </>
  );
}

export default Filtration;
