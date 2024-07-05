import React from "react";
import DeliveryAdvantages from "../components/DeliveryAdvantages";
import DeliveryImportant from "../components/DeliveryImportant";
import DeliveryStages from "../components/DeliveryStages";
import DeliveryTransportCompanies from "../components/DeliveryTransportCompanies";
import MainFullScreen from "../components/MainFullScreen";
import Layout from "../components/layout/Layout";

function PageDelivery() {
  return (
    <Layout>
      <div className="delivery">
        <MainFullScreen />

        <div className="container">
          <DeliveryAdvantages />
          <DeliveryStages />
          <DeliveryImportant />
          <DeliveryTransportCompanies />
        </div>
      </div>
    </Layout>
  );
}

export default PageDelivery;
