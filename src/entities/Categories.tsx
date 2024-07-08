import React from "react"
import useGetCategoriesList from "../hooks/useGetCategoriesList"
import Category from "./Category"

function Categories(props: {
  selectedCategory: string | undefined
  onSelectedCategoryChanged: (newSelectedCategory: string | undefined) => void
}) {
  const categoriesList = useGetCategoriesList()
  if (categoriesList == null) {
    return <span>Нет категорий</span>
  }
  return (
    <div className="categories">
      <h2 className="categories__title">Категории</h2>
      <div className="categories__row">
        {categoriesList.map((el) => (
          <Category
            key={el.id}
            item={el}
            isActive={props.selectedCategory == el.id}
            onSelect={() => {
              props.onSelectedCategoryChanged(el.id)
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Categories
