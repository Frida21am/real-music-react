import { useState } from "react"
import { NavLink } from "react-router-dom"

function GiftIcon() {
  const [giftAnim, setGiftAnim] = useState(false)
  //setInterval(() => setGiftAnim(!giftAnim), 10000)
  setTimeout(function run() {
    setGiftAnim(!giftAnim)
    setTimeout(run, 10000)
  }, 10000)

  return (
    <NavLink to="/gifts" className="gift-icon">
      <div className={giftAnim ? "gift-icon__box-body anim" : "gift-icon__box-body"}>
        <img className="gift-icon__img" src="/musical-instruments.png" />
        <div className="gift-icon__box-lid">
          <div className="gift-icon__box-bowtie"></div>
        </div>
      </div>
    </NavLink>
  )
}

export default GiftIcon
