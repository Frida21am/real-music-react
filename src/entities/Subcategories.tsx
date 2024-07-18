import React from "react";
import { SubCategory } from "../hooks/useGetCategoriesList";
import Subcategory from "./Subcategory";

function Subcategories(props: {
  subCategories: SubCategory[];
  onSelect: (selectedId: string) => void;
}) {
  return (
    <div className="subcategories">
      <div className="container">
        <div className="subcategories__row">
          {props.subCategories.map((subCategory) => (
            <Subcategory
              key={subCategory.id}
              subCategory={subCategory}
              onClick={() => props.onSelect(subCategory.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subcategories;
