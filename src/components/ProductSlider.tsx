import React, { useState } from "react";

function ProductSlider(props: { productImages: string[] }) {
  const [selectedImg, setSelectedImg] = useState<number>(0);

  let showFromIndex;
  let showToIndex;
  if (selectedImg == 0) {
    showFromIndex = 0;
    showToIndex = 3;
  } else if (selectedImg == props.productImages.length - 1) {
    showFromIndex = props.productImages.length - 3;
    showToIndex = props.productImages.length;
  } else {
    showFromIndex = selectedImg - 1;
    showToIndex = selectedImg + 2;
  }

  return (
    <div className="detail-slider__container">
      <div className="detail-slider__main-img">
        <button
          type="button"
          className="detail-slider__button-prev"
          onClick={() =>
            setSelectedImg((oldSelectedImage) =>
              oldSelectedImage != 0 ? selectedImg - 1 : selectedImg
            )
          }
        ></button>
        <img src={props.productImages[selectedImg]} alt="" />
        <button
          type="button"
          className="detail-slider__button-next"
          onClick={() =>
            setSelectedImg((oldSelectedImage) =>
              oldSelectedImage != props.productImages.length - 1
                ? selectedImg + 1
                : selectedImg
            )
          }
        ></button>
      </div>
      <div className="detail-slider__dots">
        {props.productImages
          .map((image, index) => ({ image, index }))
          .slice(showFromIndex, showToIndex)
          .map((image) => (
            <img
              src={image.image}
              key={image.index}
              alt=""
              className={
                image.index == selectedImg
                  ? "detail-slider__dot detail-slider__dot_active"
                  : "detail-slider__dot"
              }
              onClick={() => setSelectedImg(image.index)}
            />
          ))}
      </div>
    </div>
  );
}

export default ProductSlider;
