import Products from "@/entities/Products";
import MainFullScreen from "@/fullscreens/MainFullScreen";
import React from "react";

function Page() {
  return (
    <div className="catalog">
      <MainFullScreen />
      <div className="container">
        <Products />
      </div>
    </div>
  );
}

export default Page;
