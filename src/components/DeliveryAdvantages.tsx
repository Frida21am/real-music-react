import React from "react";

function DeliveryAdvantages() {
  return (
    <div className="delivery-advantages">
      <h2 className="delivery-advantages__title">Доставка по Москве</h2>
      <div className="delivery-advantages__row">
        <h3 className="delivery-advantages__caption">Доставка в день заказа</h3>
        <div className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>
            После оформления заказа с менеджером доставка производится по
            тарифам курьерских служб Достависта и Яндекс
          </p>
        </div>
        <div className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>Доставка осуществляется в интервале с 11:00 до 22:00 часов</p>
        </div>
        <div className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>
            Есть доставка ко времени, выбирайте удобный интервал не менее 1 часа
          </p>
        </div>
        <div className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>
            Мы поможем поднять до дверей крупногабаритный товар. Услуги по
            подъему и сборке оплачиваются отдельно
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeliveryAdvantages;
