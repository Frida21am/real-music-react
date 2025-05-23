"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import upArrowBtnImage from "@/images/up-arrow-btn.png";

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {backToTopButton && (
        <button className="up-arrow-btn" onClick={scrollUp}>
          <Image src={upArrowBtnImage} alt="" fill />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
