import Slider, { Settings } from "react-slick"

function AboutUsGallery() {
  const settings: Settings = {
    dots: false,
    lazyLoad: "ondemand",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  }
  return (
    <div className="about-gallery">
      <div className="about-gallery__row">
        <div className="about-gallery__column_text">
          <h2 className="about-gallery__title">О нас</h2>
          <p className="about-gallery__text">
            Музыкальный магазин Real Music - это широкий выбор музыкальных инструментов с уютной и ламповой атмосферой.
            Более 8-и лет помогаем начинающим и опытным музыкантам с подбором подходящего инструмента, будь то
            классическая гитара для ребенка или кахон для уличного музыканта. К каждому инструменту обязательно идёт
            гарантия и аксессуар в подарок.
          </p>
          <div className="about-gallery__btn">
            <a href="/">Напишите нам в WhatsApp</a>
          </div>
        </div>

        <div className="about-gallery__column_slider">
          <div className="about-gallery__slider">
            <Slider {...settings}>
              <div className="about-gallery__slider-image">
                <img src={"/aboutUsSlider/photo1.jpeg"} />
              </div>
              <div className="about-gallery__slider-image">
                <img src={"/aboutUsSlider/photo2.jpeg"} />
              </div>
              <div className="about-gallery__slider-image">
                <img src={"/aboutUsSlider/photo3.jpeg"} />
              </div>
              <div className="about-gallery__slider-image">
                <img src={"/aboutUsSlider/photo4.jpeg"} />
              </div>
              <div className="about-gallery__slider-image">
                <img src={"/aboutUsSlider/photo5.jpeg"} />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsGallery