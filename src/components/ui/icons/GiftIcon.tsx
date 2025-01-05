"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

function GiftIcon() {
  const [giftAnim, setGiftAnim] = useState(false);
  setTimeout(function run() {
    setGiftAnim(!giftAnim);
    setTimeout(run, 10000);
  }, 10000);

  return (
    <Link href="/gifts" target="_blank" className="gift-icon">
      <div
        className={
          giftAnim ? "gift-icon__box-body anim" : "gift-icon__box-body"
        }
      >
        <Image
          className="gift-icon__img"
          src="/images/musical-instruments.png"
          alt=""
          fill
        />
        <div className="gift-icon__box-lid">
          <div className="gift-icon__box-bowtie"></div>
        </div>
      </div>
    </Link>
  );
}

export default GiftIcon;
