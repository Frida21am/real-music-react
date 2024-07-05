import React from "react";
import AboutUsAdvantages from "../components/AboutUsAdvantages";
import AboutUsFaq from "../components/AboutUsFaq";
import AboutUsGallery from "../components/AboutUsGallery";
import MainFullScreen from "../components/MainFullScreen";
import Layout from "../components/layout/Layout";

function PageAboutUs() {
  return (
    <Layout>
      <div className="about">
        <MainFullScreen />

        <div className="about-container">
          <AboutUsGallery />
          <AboutUsAdvantages />
          <AboutUsFaq />
        </div>
      </div>
    </Layout>
  );
}

export default PageAboutUs;
