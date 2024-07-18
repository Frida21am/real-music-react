import React from "react";
import { SubCategory } from "../hooks/useGetCategoriesList";

function Subcategory(props: { subCategory: SubCategory; onClick: () => void }) {
  return (
    <div className="subcategories__item" onClick={props.onClick}>
      <span>{props.subCategory.title}</span>
    </div>
  );
}

export default Subcategory;
