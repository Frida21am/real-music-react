function DeliveryImportant() {
  return (
    <div className="delivery-important">
      <h3 className="delivery-important__title">Важно:</h3>
      <hr className="delivery-important-line" />
      <ul className="delivery-stages-list">
        <li>
          <span>При получении заказа необходимо проверить внешний вид и комплектность товара,</span> а также
          комплектность всего заказа. После получения заказа претензии к внешним дефектам товара, его количеству,
          комплектности и товарному виду не принимаются
        </li>
        <li>
          <span>Курьеры принимают к оплате только наличные, либо перевод на карту,</span> так как у них нет терминалов
          для оплаты картой. Вы можете оплатить заказ картой заранее либо по терминалу в нашем магазине
        </li>
        <li>
          <span>Доставка в торговые и бизнес-центры</span> осуществляется только до главного входа
        </li>
      </ul>
    </div>
  )
}

export default DeliveryImportant
