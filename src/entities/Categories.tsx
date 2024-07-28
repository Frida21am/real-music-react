import React, { useState } from "react";
import useGetCategoriesList, {
  Category as CategoryItem,
} from "../hooks/useGetCategoriesList";
import Category from "./Category";
import Subcategories from "./Subcategories";

function Categories(props: {
  selectedCategory: string | undefined;
  onSelectedCategoryChanged: (newSelectedCategory: string | undefined) => void;
}) {
  const categoriesList = useGetCategoriesList();
  if (categoriesList == null) {
    return <span>Нет категорий</span>;
  }
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem>(
    categoriesList[0]
  );
  return (
    <>
      <div className="categories">
        <h2 className="categories__title">Категории</h2>
        <div className="categories__row">
          {categoriesList.map((el) => (
            <Category
              key={el.id}
              item={el}
              isActive={
                props.selectedCategory == el.id ||
                el.subCategories.some(
                  (subCategory) => subCategory.id == props.selectedCategory
                )
              }
              onSelect={() => {
                setSelectedCategory(el);
                props.onSelectedCategoryChanged(el.id);
              }}
            />
          ))}
        </div>
      </div>
      <Subcategories
        subCategories={selectedCategory.subCategories}
        selectedCategory={props.selectedCategory}
        onSelect={(newSelectedCategoryId) =>
          props.onSelectedCategoryChanged(newSelectedCategoryId)
        }
      />
    </>
  );
}

export default Categories;
