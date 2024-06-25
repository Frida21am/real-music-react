function GiftsGuarantee() {
  return (
    <div className="gifts-guarantee">
      <h2 className="gifts-guarantee__title">Гарантия для каждого инструмента!</h2>
      <div className="gifts-guarantee__row">
        <div className="gifts-guarantee__item">
          <span className="gifts-guarantee__item-number">1</span>
          <p className="gifts-guarantee__item-type">
            Электрогитары и <br />
            <span>бас-гитары</span>
          </p>
          <p className="gifts-guarantee__item-period">Гарантия 6 месяцев</p>
        </div>
        <div className="gifts-guarantee__item">
          <span className="gifts-guarantee__item-number">2</span>
          <p className="gifts-guarantee__item-type">
            Акустические гитары, <br />
            <span>классические гитары, укулеле</span>
          </p>
          <p className="gifts-guarantee__item-period">Гарантия 6 месяцев</p>
          <p className="gifts-guarantee__item-return">Обмен/возврат 2 недели</p>
        </div>
        <div className="gifts-guarantee__item">
          <span className="gifts-guarantee__item-number">3</span>
          <p className="gifts-guarantee__item-type">
            <span>Клавишные</span>
          </p>
          <p className="gifts-guarantee__item-period">Гарантия 12 месяцев</p>
        </div>
      </div>
    </div>
  )
}

export default GiftsGuarantee
