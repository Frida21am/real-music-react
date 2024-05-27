import { NavLink } from "react-router-dom"

function GiftIcon() {
  return (
    <NavLink to="/gifts" className="gift-icon">
      <div className="gift-icon__box-body">
        <img className="gift-icon__img" src="/musical-instruments.png" />
        <div className="gift-icon__box-lid">
          <div className="gift-icon__box-bowtie"></div>
        </div>
      </div>
    </NavLink>
  )
}

export default GiftIcon
