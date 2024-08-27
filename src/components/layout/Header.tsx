import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { sideBarMenu } from "../../data/data";
import ShoppingCart from "../../popups/ShoppingCart";
import WishList from "../WishList";
import useGetLikedProducts from "../../hooks/useGetLikedProducts";
import useGetProductsInCart from "../../hooks/useGetProductsInCart";

function Header() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  function closeSideBar() {
    if (sideBarIsOpen) {
      setSideBarIsOpen(!sideBarIsOpen);
    }
  }

  const [isWishListOpen, setIsWishListOpen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const likedProducts = useGetLikedProducts();
  const productsInOrder = useGetProductsInCart();

  const currentUrl = window.location.pathname;
  return (
    <header className="header">
      <div className="header-blur"></div>
      <div className="container">
        <div className="header-row">
          <div className="header__logo">
            <a href="/" className="header__logo_image">
              <StaticImage src="../../images/logo12.png" alt="" />
            </a>
          </div>
          <div className="header__phone">
            <div className="header__phone-item">
              <div>
                <StaticImage src="../../images/phone-call.png" alt="" />
              </div>
              <a href="tel:89943336688">8-994-333-66-88</a>
            </div>
            <div className="header__phone-item">
              <div>
                <StaticImage src="../../images/phone-call.png" alt="" />
              </div>
              <a href="tel:89680556655">8-968-055-66-55</a>
            </div>
          </div>
          <nav className={sideBarIsOpen ? "header__nav active" : "header__nav"}>
            <ul className="header__nav_list">
              {sideBarMenu.map((el) => (
                <li
                  className={
                    el.href == currentUrl
                      ? "header__nav-list__item active"
                      : "header__nav-list__item"
                  }
                >
                  <Link
                    to={el.href}
                    onClick={() => {
                      closeSideBar();
                    }}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#contacts" onClick={() => closeSideBar()}>
                  Контакты
                </a>
              </li>
              <li>
                <StaticImage src="../../images/delivery/avito.png" alt="" />
                <a
                  href="https://www.avito.ru/brands/i224952978/all/muzykalnye_instrumenty?gdlkerfdnwq=101&page_from=from_item_header&iid=3183987440&sellerId=4a2d802f13e360fb2496b6d7bcccca0e"
                  onClick={() => closeSideBar()}
                  target="_blank"
                >
                  Мы на Авито
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__addprod">
            <div
              className="header__addprod_likes"
              onClick={() => setIsWishListOpen(true)}
            >
              <div className="header__addprod-image">
                <div>
                  <StaticImage src="../../images/like.png" alt="" />
                </div>
              </div>
              <span>{likedProducts.length}</span>
            </div>
            <div
              className="header__addprod_cart"
              onClick={() => setIsPopupOpen(true)}
            >
              <div className="header__addprod-image">
                <div>
                  <StaticImage src="../../images/basket.png" alt="" />
                </div>
              </div>
              <span>{productsInOrder.length}</span>
            </div>
          </div>
          <div
            className={sideBarIsOpen ? "icon-menu active" : "icon-menu"}
            onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <WishList
        isWishListOpen={isWishListOpen}
        onWishListClosing={setIsWishListOpen}
      />
      <ShoppingCart isPopupOpen={isPopupOpen} onPopupClosing={setIsPopupOpen} />
    </header>
  );
}

export default Header;
