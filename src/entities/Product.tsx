import { useState } from "react"
import { NavLink } from "react-router-dom"

export interface IItemDto {
  id: number
  title: string
  frontImg: string
  backImg: string
  price: number
  bestseller: boolean
}

function Product(props: { item: IItemDto }) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeLike, setActiveLike] = useState(false)

  return (
    <div className="products-gradient-box">
      <div className="products-item">
        <NavLink to={`/product/${props.item.id}`} style={{ textDecoration: "none" }} className="products-item__image">
          <img
            src={isHovered ? props.item.backImg : props.item.frontImg}
            alt=""
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </NavLink>
        <div className={!props.item.bestseller ? "products-is-bestseller" : "products-is-bestseller_yes"}>хит!</div>

        <a
          href="#addtofavorites"
          className={activeLike ? "t1002__addBtn t1002__addBtn_active" : "t1002__addBtn"}
          onClick={() => setActiveLike((oldActiveLike) => !oldActiveLike)}
        >
          <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 6.32647C20 11.4974 10.5 17 10.5 17C10.5 17 1 11.4974 1 6.32647C1 -0.694364 10.5 -0.599555 10.5 5.57947C10.5 -0.599555 20 -0.507124 20 6.32647Z"
              stroke="black"
              strokeLinejoin="round"
            ></path>
          </svg>
        </a>

        <div className="products-item-bottom">
          <NavLink
            to={`/product/${props.item.id}`}
            style={{ textDecoration: "none" }}
            className="products-item-bottom__title"
          >
            {props.item.title}
          </NavLink>
          <div className="products-item-bottom__price">{props.item.price} р.</div>
          <div className="products-item-bottom__buttons">
            <NavLink
              to={`/product/${props.item.id}`}
              className="products-item-bottom__button products-item-bottom__button_more"
            >
              Подробнее
            </NavLink>
            <div className="products-item-bottom__button products-item-bottom__button_add">В корзину</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
