import React from "react";
import MainFullScreen from "../fullscreens/MainFullScreen";
import Products from "../entities/Products";

function PageCatalog() {
  return (
    <div className="catalog">
      <MainFullScreen />
      <div className="container">
        <Products />
      </div>
    </div>
  );
}

export default PageCatalog;
