import React from "react"
import { SelectedFiltersPrice } from "./Filtration"

function FilterPrice(props: {
  priceFilter: SelectedFiltersPrice | undefined
  onPriceFilterChanged: (newPriceFilter: SelectedFiltersPrice | undefined) => void
}) {
  return (
    <div className="filters-item filters-price">
      <div className="filters-price-fieldset__row">
        <fieldset className="filters-price-fieldset">
          <label className="filters-price-fieldset__label" htmlFor="width">
            от
          </label>
          <input
            className="filters-price-fieldset__input"
            id="width"
            defaultValue={props.priceFilter?.min}
            onChange={(e) => {
              const priceNumber = Number.parseFloat(e.target.value)
              if (isNaN(priceNumber)) {
                return
              }
              props.onPriceFilterChanged({
                ...props.priceFilter,
                min: priceNumber,
              })
            }}
          />{" "}
        </fieldset>
        <span className="filters-price-fieldset">—</span>
        <fieldset className="filters-price-fieldset">
          <label className="filters-price-fieldset__label" htmlFor="maxWidth">
            до
          </label>
          <input
            className="filters-price-fieldset__input"
            id="maxWidth"
            defaultValue={props.priceFilter?.max}
            onChange={(e) => {
              const priceNumber = Number.parseFloat(e.target.value)
              if (isNaN(priceNumber)) {
                return
              }
              props.onPriceFilterChanged({
                ...props.priceFilter,
                max: priceNumber,
              })
            }}
          />
          <label className="filters-price-fieldset__label_currency">₽</label>
        </fieldset>
      </div>
    </div>
  )
}

export default FilterPrice
