import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

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
        <div
          className="detail-slider__button-prev"
          onClick={() =>
            setSelectedImg((oldSelectedImage) =>
              oldSelectedImage != 0 ? selectedImg - 1 : selectedImg
            )
          }
        >
          <div>
            <StaticImage src="../images/sliderArrow.png" alt="" />
          </div>
        </div>
        <img src={props.productImages[selectedImg]} alt="" />
        <div
          className="detail-slider__button-next"
          onClick={() =>
            setSelectedImg((oldSelectedImage) =>
              oldSelectedImage != props.productImages.length - 1
                ? selectedImg + 1
                : selectedImg
            )
          }
        >
          <div>
            <StaticImage src="../images/sliderArrow.png" alt="" />
          </div>
        </div>
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
