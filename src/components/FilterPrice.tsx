import * as Popover from "@radix-ui/react-popover"
import { Cross2Icon } from "@radix-ui/react-icons"
import { SelectedFiltersPrice } from "./Filtration"

function FilterPrice(props: {
  priceFilter: SelectedFiltersPrice | undefined
  onPriceFilterChanged: (newPriceFilter: SelectedFiltersPrice | undefined) => void
}) {
  return (
    <div className="filters-left__item filters-price">
      <Popover.Root>
        <Popover.Trigger asChild>
          <button className="filters-price__button">Цена</button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="filters-price__popover" sideOffset={5}>
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
                />
              </fieldset>
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
              </fieldset>
            </div>
            <Popover.Close className="filters-price-popover__close" aria-label="Close">
              <Cross2Icon />
            </Popover.Close>
            <Popover.Arrow className="filters-price-popover__arrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}

export default FilterPrice
