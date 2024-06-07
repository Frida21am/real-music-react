function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__row">
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.60376395997!2d37.20313360000001!3d55.661100399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5509726a2e7a3%3A0x62872f9da995a37f!2z0YguINCc0L7QttCw0LnRgdC60L7QtSwgMzAsINCU0YPQsdC60LggKNCz0L8g0JvQtdGB0L0uINCT0L7RgNC-0LTQvtC6KSwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQzMDg2!5e0!3m2!1sru!2sru!4v1716801684260!5m2!1sru!2sru"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Responsive Google Map"
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
                Москва, Можайское шоссе, 30. Вход со двора возле 2 подъезда, вместе со входом в Ozon. Метро Славянский
                бульвар
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
