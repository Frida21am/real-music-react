import GiftsAccessories from "@/components/GiftsAccessories";
import GiftsCutaway from "@/components/GiftsCutaway";
import GiftsGuarantee from "@/components/GiftsGuarantee";
import GiftsFulscreen from "@/components/ui/fullscreens/GiftsFulscreen";
import React from "react";

function Page() {
  return (
    <div className="gifts">
      <GiftsFulscreen />
      <GiftsAccessories />
      <GiftsGuarantee />
      <GiftsCutaway />
    </div>
  );
}

export default Page;
