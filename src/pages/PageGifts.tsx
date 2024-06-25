import GiftsAccessories from "../components/GiftsAccessories"
import GiftsCutaway from "../components/GiftsCutaway"
import GiftsFulscreen from "../fullscreens/GiftsFulscreen"
import GiftsGuarantee from "../components/GiftsGuarantee"

function PageGifts() {
  return (
    <div className="gifts">
      <GiftsFulscreen />
      <div className="container">
        <GiftsAccessories />
        <GiftsGuarantee />
        <GiftsCutaway />
      </div>
    </div>
  )
}

export default PageGifts
