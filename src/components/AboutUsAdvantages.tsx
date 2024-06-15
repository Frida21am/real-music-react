function AboutUsAdvantages() {
  return (
    <div className="about-advantages">
      <h2 className="about-advantages__title">Наши преимущества:</h2>
      <div className="about-advantages__row">
        <div className="about-advantages__item">
          <div className="about-advantages__item-icon">
            <img src="/advantagesIcons/repair&rental.png" alt="repair&rental" />
          </div>
          <div className="about-advantages__item-text">
            <span>Ремонт и Аренда музыкальных инструментов</span>
          </div>
        </div>
        <div className="about-advantages__item">
          <div className="about-advantages__item-icon">
            <img src="/advantagesIcons/service.png" alt="service" />
          </div>
          <div className="about-advantages__item-text">
            <span>Высокий уровень сервиса</span>
          </div>
        </div>
        <div className="about-advantages__item">
          <div className="about-advantages__item-icon">
            <img src="/advantagesIcons/gifts&discounts.png" alt="gifts&discounts" />
          </div>
          <div className="about-advantages__item-text">
            <span>Дарим подарки и делаем скидки!</span>
          </div>
        </div>
        <div className="about-advantages__item">
          <div className="about-advantages__item-icon">
            <img src="/advantagesIcons/location.png" alt="location" />
          </div>
          <div className="about-advantages__item-text">
            <span>Магазин в Москве недалеко от метро</span>
          </div>
        </div>
        <div className="about-advantages__item">
          <div className="about-advantages__item-icon">
            <img src="/advantagesIcons/delivery.png" alt="delivery" />
          </div>
          <div className="about-advantages__item-text">
            <span>Доставка день в день</span>
          </div>
        </div>
        <div className="about-advantages__item">
          <div className="about-advantages__item-icon">
            <img src="/advantagesIcons/guarantee.png" alt="guarantee" />
          </div>
          <div className="about-advantages__item-text">
            <span>Гарантия на каждый инструмент</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsAdvantages
