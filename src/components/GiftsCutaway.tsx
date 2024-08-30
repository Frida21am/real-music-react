import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useEffect, useRef, useState } from "react";

let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.5,
};
function GiftsCutaway() {
  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  let callback = function (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    const [entry] = entries;
    setIsInView(entry.isIntersecting);
    if (containerRef.current != null) {
      if (entry.isIntersecting) {
        observer.unobserve(containerRef.current);
      }
    }
  };
  useEffect(() => {
    let observer = new IntersectionObserver(callback, options);
    if (containerRef.current != null) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current != null) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [containerRef, options]);
  return (
    <div className="gifts-cutaway">
      <div className="container">
        <h2 className="gifts-cutaway__title">
          Закажите инструмент прямо сейчас на нашем сайте и получите нашу
          визитку в подарок!
        </h2>
        <div className="gifts-cutaway__row">
          <div className="gifts-cutaway__column gifts-cutaway__column-features">
            <p className="gifts-cutaway-features">Особенности нашей визитки:</p>
            <ul className="gifts-cutaway-features__list">
              <li>
                <span>Скидка 5%</span> на большинство товаров в нашем магазине
              </li>
              <li>
                <span>Бессрочная</span>. Может воспользоваться любой
              </li>
            </ul>
            <a href="/" className="gifts-cutaway-catalog-btn">
              В каталог
            </a>
          </div>
          <div
            className="gifts-cutaway__column gifts-cutaway__column-card"
            ref={containerRef}
          >
            <StaticImage
              src="../images/bussines-card-test.png"
              alt=""
              placeholder="none"
              className={`gifts-cutaway-card ${
                isInView ? "gifts-cutaway-card_active" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftsCutaway;
