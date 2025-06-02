import AboutUsAdvantages from "@/components/AboutUsAdvantages";
import AboutUsFaq from "@/components/AboutUsFaq";
import AboutUsGallery from "@/components/AboutUsGallery";
import MainFullScreen from "@/components/ui/fullscreens/MainFullScreen";

function PageAboutUs() {
  return (
    <div className="about">
      <MainFullScreen />

      <div className="about-container">
        <AboutUsGallery />
        <AboutUsAdvantages />
        <AboutUsFaq />
      </div>
    </div>
  );
}

export default PageAboutUs;
