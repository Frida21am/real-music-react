import React from "react";
import { SubCategory } from "../hooks/useGetCategoriesList";
import Subcategory from "./Subcategory";

function Subcategories(props: {
  subCategories: SubCategory[];
  onSelect: (selectedCategory: string | undefined) => void;
  selectedCategory: string | undefined;
}) {
  return (
    <div className="subcategories">
      <div className="container">
        <div className="subcategories__row">
          {props.subCategories.map((subCategory) => (
            <Subcategory
              key={subCategory.id}
              subCategory={subCategory}
              isActive={props.selectedCategory == subCategory.id}
              onClick={() => props.onSelect(subCategory.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subcategories;
