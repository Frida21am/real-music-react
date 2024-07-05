import React from "react";
import GiftsAccessories from "../components/GiftsAccessories";
import GiftsCutaway from "../components/GiftsCutaway";
import GiftsFulscreen from "../components/GiftsFulscreen";
import GiftsGuarantee from "../components/GiftsGuarantee";
import Layout from "../components/layout/Layout";

function PageGifts() {
  return (
    <Layout>
      <div className="gifts">
        <GiftsFulscreen />
        <GiftsAccessories />
        <GiftsGuarantee />
        <GiftsCutaway />
      </div>
    </Layout>
  );
}

export default PageGifts;
