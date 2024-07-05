import React from "react"
import DeliveryAdvantages from "../components/DeliveryAdvantages"
import DeliveryImportant from "../components/DeliveryImportant"
import DeliveryStages from "../components/DeliveryStages"
import DeliveryTransportCompanies from "../components/DeliveryTransportCompanies"
import MainFullScreen from "../components/MainFullScreen"

function PageDelivery() {
  return (
    <div className="delivery">
      <MainFullScreen />

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
