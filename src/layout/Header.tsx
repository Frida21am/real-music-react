import { useState } from "react"
import { NavLink } from "react-router-dom"
function Header() {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false)
  function closeSideBar() {
    if (sideBarIsOpen) {
      setSideBarIsOpen(!sideBarIsOpen)
    }
  }
  return (
    <header className="header">
      <div className="header-blur"></div>
      <div className="container">
        <div className="header-row">
          <div className="header__logo">
            <a href="/" className="header__logo_image">
              <img src="/logo12.png" alt="" />
            </a>
          </div>
          <div className="header__phone">
            <div>
              <img src="/phone-call.png" alt="" />
              <a href="tel:89943336688">8-994-333-66-88</a>
            </div>
            <div>
              <img src="/phone-call.png" alt="" />
              <a href="tel:89680556655">8-994-333-66-88</a>
            </div>
          </div>
          <nav className={sideBarIsOpen ? "header__nav active" : "header__nav"}>
            <ul className="header__nav_list">
              <li>
                <NavLink to="/" onClick={() => closeSideBar()}>
                  Каталог
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => closeSideBar()}>
                  О нас
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={() => closeSideBar()}>
                  Наш блог
                </NavLink>
              </li>
              <li>
                <NavLink to="/delivery" onClick={() => closeSideBar()}>
                  Доставка
                </NavLink>
              </li>
              <li>
                <a href="#contacts" onClick={() => closeSideBar()}>
                  Контакты
                </a>
              </li>
              <li>
                <img src="/delivery/avito.png" alt="" />
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
            <div className="header__addprod_likes">
              <img src="/like.png" alt="" />
              <span>0</span>
            </div>
            <div className="header__addprod_cart">
              <img src="/basket.png" alt="" />
              <span>0</span>
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
    </header>
  )
}

export default Header
