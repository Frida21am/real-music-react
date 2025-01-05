import React from "react";
import { SubCategory } from "../../../api/apiClient.dto";

function Subcategory(props: {
  subCategory: SubCategory;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`subcategories__item ${
        props.isActive ? "subcategories__item_active" : ""
      }`}
      onClick={props.onClick}
    >
      <span>{props.subCategory.title}</span>
    </div>
  );
}

export default Subcategory;
