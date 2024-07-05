import { Link } from "gatsby"
import React from "react"
import { useState } from "react"

function GiftIcon() {
  const [giftAnim, setGiftAnim] = useState(false)
  //setInterval(() => setGiftAnim(!giftAnim), 10000)
  setTimeout(function run() {
    setGiftAnim(!giftAnim)
    setTimeout(run, 10000)
  }, 10000)

  return (
    <Link to="/gifts" className="gift-icon">
      <div className={giftAnim ? "gift-icon__box-body anim" : "gift-icon__box-body"}>
        <img className="gift-icon__img" src="/musical-instruments.png" />
        <div className="gift-icon__box-lid">
          <div className="gift-icon__box-bowtie"></div>
        </div>
      </div>
    </Link>
  )
}

export default GiftIcon
