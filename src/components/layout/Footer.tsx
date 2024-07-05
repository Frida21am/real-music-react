import React from "react";

function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__row">
          <div className="footer-map">
            <iframe
              src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=147311093683"
              width="500"
              height="400"
            ></iframe>
          </div>

          <div className="footer-text">
            <div className="footer-phones">
              <span className="footer-phones__title">Телефон</span>
              <a href="tel:89943336688" className="footer-phones__number">
                8-994-333-66-88
              </a>
              <a href="tel:89680556655" className="footer-phones__number">
                8-968-055-66-55
              </a>
            </div>
            <div className="footer-adress">
              <span className="footer-adress__title">Адрес</span>
              <span className="footer-adress__text">
                Москва, Можайское шоссе, 30. Метро Славянский бульвар. Вход со
                двора возле 2 подъезда, вместе со входом в Ozon. Ежедневно с
                10:00 до 22:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
