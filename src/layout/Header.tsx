import { NavLink } from "react-router-dom"
function Header() {
  return (
    <header className="header">
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
          <div className="header__nav">
            <ul className="header__nav_list">
              <li>
                <NavLink to="/">Каталог</NavLink>
              </li>
              <li>
                <NavLink to="/about">О нас</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Наш блог</NavLink>
              </li>
              <li>
                <NavLink to="/delivery">Доставка</NavLink>
              </li>
              <li>
                <a href="#contacts">Контакты</a>
              </li>
            </ul>
          </div>
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
        </div>
      </div>
    </header>
  )
}

export default Header
