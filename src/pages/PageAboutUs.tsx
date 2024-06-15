import AboutUsAdvantages from "../components/AboutUsAdvantages"
import AboutUsFaq from "../components/AboutUsFaq"
import AboutUsGallery from "../components/AboutUsGallery"

function PageAboutUs() {
  return (
    <div className="about">
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
      <div className="about-container">
        <AboutUsGallery />
        <AboutUsAdvantages />
        <AboutUsFaq />
      </div>
    </div>
  )
}

export default PageAboutUs
