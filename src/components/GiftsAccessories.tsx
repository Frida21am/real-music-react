import React from "react"

function GiftsAccessories() {
  return (
    <div className="gifts-accessories">
      <div className="container">
        <h2 className="gifts-accessories-title">Аксессуары в подарок</h2>
        <div className="gifts-accessories__row">
          <div className="gifts-accessories-table gifts-accessories-table_1">
            <h3 className="gifts-accessories-table__title">Для струнных</h3>
            <ul className="gifts-accessories-list">
              <li>Чехол с лямками</li>
              <li>Запасной комплект струн</li>
              <li>Тюнер для настройки гитары</li>
              <li>Комплект медиаторов</li>
              <li>Ремень для гитары</li>
              <li>Анкерный ключ для настройки</li>
              <li>Каподастр</li>
            </ul>
            <ul className="gifts-accessories-list">
              <li>Джек кабель</li>
              <li>Рычаг тремоло</li>
              <li>Копилка медиаторов</li>
            </ul>
          </div>

          <div className="gifts-accessories__right-column">
            <div className="gifts-accessories-table gifts-accessories-table_2">
              <h3 className="gifts-accessories-table__title">Для клавишных</h3>
              <ul className="gifts-accessories-list">
                <li>Стойка X-образная</li>
                <li>Стойка деревянная</li>
                <li>Педаль</li>
                <li>Блок питания</li>
                <li>Накидка</li>
              </ul>
            </div>
            <div className="gifts-accessories-table gifts-accessories-table_3">
              <h3 className="gifts-accessories-table__title">Каталог аксесуаров</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GiftsAccessories
