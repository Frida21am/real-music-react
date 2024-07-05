import React from "react"

function DeliveryStages() {
  return (
    <div className="delivery-stages">
      <h3 className="delivery-stages__title">Как всё будет происходить?</h3>
      <hr className="delivery-stages-line" />
      <div className="delivery-stages__row">
        <div className="delivery-stages__item">
          <p className="delivery-stages__item-number">01</p>
          <p className="delivery-stages__item-caption">Оформление</p>
          <p className="delivery-stages__item-text">
            Вы оформляете заказ на сайте. Либо можете связаться с нами через Авито или WhatsApp
          </p>
        </div>
        <div className="delivery-stages__item">
          <p className="delivery-stages__item-number">02</p>
          <p className="delivery-stages__item-caption">Подтверждение</p>
          <p className="delivery-stages__item-text">
            Мы звоним для подтверждения заказа. Консультируем по товару и согласовываем с Вами день и время доставки
          </p>
        </div>
        <div className="delivery-stages__item">
          <p className="delivery-stages__item-number">03</p>
          <p className="delivery-stages__item-caption">Отправление</p>
          <p className="delivery-stages__item-text">
            Собираем заказ, проверяем, упаковываем и передаём в транспортную компанию
          </p>
        </div>
        <div className="delivery-stages__item">
          <p className="delivery-stages__item-number">04</p>
          <p className="delivery-stages__item-caption">Доставка до двери</p>
          <p className="delivery-stages__item-text">
            В назначенный день, в выбранный Вами диапазон времени курьер привозит Ваш заказ.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DeliveryStages
