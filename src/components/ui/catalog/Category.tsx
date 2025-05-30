import Image from "next/image";
import React from "react";

export interface ICategoryDto {
  id: number | undefined;
  title: string;
  img?: string;
}

function Category(props: {
  item: ICategoryDto;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      className={`categories-item ${
        props.isActive ? "categories-item_active" : ""
      }`}
      onClick={() => {
        props.onSelect();
      }}
    >
      <div className="categories-item__image">
        {props.item.img && (
          <Image src={props.item.img ?? ""} alt="" draggable="false" fill />
        )}
      </div>
      <div className="categories-item__caption">
        <span>{props.item.title}</span>
      </div>
    </div>
  );
}

export default Category;
