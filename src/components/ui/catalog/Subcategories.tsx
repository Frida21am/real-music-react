import React from "react";
import Subcategory from "./Subcategory";
import useGetSubCategories from "@/hooks/useGetSubCategories";
import { SubCategory } from "../../../api/apiClient.dto";

function Subcategories(props: {
  onSelect: (selectedSubCategory: SubCategory | undefined) => void;
  selectedCategory: number;
  selectedSubCategory: number | undefined;
}) {
  const { subCategories, isLoading } = useGetSubCategories(
    props.selectedCategory
  );

  if (isLoading) {
    return "загружается...";
  }

  if (subCategories == null) {
    return "Ошибка загрузки";
  }

  return (
    <div className="subcategories">
      <div className="container">
        <div className="subcategories__row">
          {subCategories.map((subCategory) => (
            <Subcategory
              key={subCategory.id}
              subCategory={subCategory}
              isActive={props.selectedSubCategory == subCategory.id}
              onClick={() => props.onSelect(subCategory)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subcategories;
