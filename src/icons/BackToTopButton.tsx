import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";

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
          <StaticImage
            src="../images/up-arrow-btn.png"
            alt=""
            placeholder="none"
          />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
