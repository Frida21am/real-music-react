import React, { useState } from "react";
import Subcategories from "./Subcategories";
import useGetCategories from "@/hooks/useGetCategories";
import { Category as CategoryItem, SubCategory } from "./apiClient.dto";
import Category from "./Category";

function Categories(props: {
  selectedCategory: CategoryItem | undefined;
  selectedSubCategory: SubCategory | undefined;
  onSelectedCategoryChanged: (
    newSelectedCategory: CategoryItem | undefined
  ) => void;
  onSelectedSubCategoryChanged: (
    newSelectedSubCategory: SubCategory | undefined
  ) => void;
}) {
  const { data, isLoading } = useGetCategories();

  return (
    <>
      {!isLoading && data != null ? (
        <CategoriesList
          {...props}
          categories={data.categories}
          allCategory={data.allCategory}
        />
      ) : (
        "загружается..."
      )}
    </>
  );
}

function CategoriesList(props: {
  categories: CategoryItem[];
  selectedCategory: CategoryItem | undefined;
  selectedSubCategory: SubCategory | undefined;
  onSelectedCategoryChanged: (newSelectedCategory: CategoryItem) => void;
  onSelectedSubCategoryChanged: (
    newSelectedSubCategory: SubCategory | undefined
  ) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem>(
    props.categories[0]
  );

  return (
    <>
      <div className="categories">
        <h2 className="categories__title">Категории</h2>
        <div className="categories__row">
          {props.categories.map((el) => (
            <Category
              key={el.id}
              item={el}
              isActive={props.selectedCategory?.id == el.id}
              onSelect={() => {
                setSelectedCategory(el);
                props.onSelectedCategoryChanged(el);
              }}
            />
          ))}
        </div>
      </div>
      {selectedCategory != null ? (
        <Subcategories
          selectedSubCategory={props.selectedSubCategory?.id}
          selectedCategory={selectedCategory.id}
          onSelect={(newSelectedSubCategory) =>
            props.onSelectedSubCategoryChanged(newSelectedSubCategory)
          }
        />
      ) : null}
    </>
  );
}

export default Categories;
