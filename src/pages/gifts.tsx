import React from "react"
import GiftsAccessories from "../components/GiftsAccessories"
import GiftsCutaway from "../components/GiftsCutaway"
import GiftsFulscreen from "../components/GiftsFulscreen"
import GiftsGuarantee from "../components/GiftsGuarantee"

function PageGifts() {
  return (
    <div className="gifts">
      <GiftsFulscreen />
      <GiftsAccessories />
      <GiftsGuarantee />
      <GiftsCutaway />
    </div>
  )
}

export default PageGifts
