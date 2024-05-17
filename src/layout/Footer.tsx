function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__row">
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.217513707959!2d37.41737907708529!3d55.71997199451915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54ef2c09936f7%3A0x4c2a6bb94a294fcc!2z0JzQvtC20LDQudGB0LrQvtC1INGILiwgMzAsINCc0L7RgdC60LLQsCwgMTIxMzU0!5e0!3m2!1sru!2sru!4v1711472610455!5m2!1sru!2sru"
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
                Москва, Можайское шоссе 30, вход со двора возле 2 подъезда, вместе со входом в Ozon Метро Славянский
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
