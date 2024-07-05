import React from "react"

function DeliveryTransportCompanies() {
  return (
    <div className="delivery-companies">
      <h3 className="delivery-companies__title">
        Доставка по России осуществляется транспортными компаниями «до дверей» или пункта самовывоза. Ниже представлен
        основной список транспортных компаний:
      </h3>
      <div className="delivery-companies__row">
        <div className="delivery-companies__item">
          <img src="/delivery/pochta-rf.png" alt="pochta-rf" />
          <p>Почта России</p>
          <span>(2-5 дней)</span>
        </div>
        <div className="delivery-companies__item">
          <img src="/delivery/sdek.png" alt="sdek" />
          <p>СДЭК</p>
          <span>(2-7 дней)</span>
        </div>
        <div className="delivery-companies__item">
          <img src="/delivery/avito.png" alt="avito" />
          <p>Авито доставка</p>
          <span>(2-5 дней)</span>
        </div>
        <div className="delivery-companies__item">
          <img src="/delivery/boxberry.png" alt="boxberry" />
          <p>Boxberry</p>
          <span>(2-7 дней)</span>
        </div>
      </div>
      <div className="delivery-companies__text">
        <p>Время доставки зависит от удаленности региона, при оформлении можно узнать примерный срок.</p>
        <p>Возможно рассмотрение других вариантов доставки.</p>
      </div>
      <div className="delivery-companies__button"></div>
    </div>
  )
}

export default DeliveryTransportCompanies
