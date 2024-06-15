import DeliveryAdvantages from "../components/DeliveryAdvantages"
import DeliveryImportant from "../components/DeliveryImportant"
import DeliveryStages from "../components/DeliveryStages"
import DeliveryTransportCompanies from "../components/DeliveryTransportCompanies"

function PageDelivery() {
  return (
    <div className="delivery">
      <div className="fullscreen">
        <div className="container">
          <div className="fulscreen-caption">
            <h1 className="fulscreen-caption__title">Real Music</h1>
            <h2 className="fulscreen-caption__subtitle">Музыкальные инструменты в Москве</h2>
            <div className="fulscreen-caption__btn">
              <a href="#catalog">Получить консультацию</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <DeliveryAdvantages />
        <DeliveryStages />
        <DeliveryImportant />
        <DeliveryTransportCompanies />
      </div>
    </div>
  )
}

export default PageDelivery
