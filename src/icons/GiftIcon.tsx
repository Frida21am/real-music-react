import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

function GiftIcon() {
  const [giftAnim, setGiftAnim] = useState(false);
  setTimeout(function run() {
    setGiftAnim(!giftAnim);
    setTimeout(run, 10000);
  }, 10000);

  return (
    <Link to="/gifts" target="_blank" className="gift-icon">
      <div
        className={
          giftAnim ? "gift-icon__box-body anim" : "gift-icon__box-body"
        }
      >
        <StaticImage
          className="gift-icon__img"
          src="../images/musical-instruments.png"
          alt=""
          placeholder="none"
        />
        <div className="gift-icon__box-lid">
          <div className="gift-icon__box-bowtie"></div>
        </div>
      </div>
    </Link>
  );
}

export default GiftIcon;
