import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useState } from "react";
import InputMask from "react-input-mask";

function MainFullScreen() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  return (
    <div className="fullscreen">
      <div className="container">
        <div className="fulscreen-caption">
          <h1 className="fulscreen-caption__title">Real Music</h1>
          <h2 className="fulscreen-caption__subtitle">
            Музыкальные инструменты в Москве
          </h2>
          <div
            className="fulscreen-caption__btn"
            onClick={() => setIsPopupOpen(true)}
          >
            <span>Получить консультацию</span>
          </div>
        </div>
      </div>
      <FeedbackFormPopup
        isPopupOpen={isPopupOpen}
        onPopupClosing={setIsPopupOpen}
      />
    </div>
  );
}

function FeedbackFormPopup(props: {
  isPopupOpen: boolean;
  onPopupClosing: (isPopupOpen: boolean) => void;
}) {
  return (
    <div className="feedback-popup">
      <div
        className={props.isPopupOpen ? "popup__shadow showed" : "popup__shadow"}
        onClick={() => props.onPopupClosing(false)}
      ></div>
      <div
        className={
          props.isPopupOpen ? "popup__content showed" : "popup__content"
        }
      >
        <div className="feedback-popup-form">
          <form action="#" className="feedback-popup-form-contacts">
            <span
              className="popup__close"
              onClick={() => props.onPopupClosing(false)}
            >
              <StaticImage
                src="../images/close.png"
                alt=""
                placeholder="none"
              />
            </span>
            <div className="feedback-popup__title">
              Мы перезвоним вам в ближайшее время
            </div>
            <div className="feedback-popup-form-contacts__input">
              <div className="feedback-popup-form-contacts__label">
                Ваше имя *
              </div>
              <input type="text" name="name" required />
            </div>
            <div className="feedback-popup-form-contacts__input">
              <div className="feedback-popup-form-contacts__label">
                Ваш номер *
              </div>
              <InputMask
                mask="+7 999 999 99 99"
                maskChar=" "
                className="tel"
                required
              />
            </div>
            <div className="feedback-popup-form-contacts__input">
              <div className="feedback-popup-form-contacts__label">
                Сообщение
              </div>
              <textarea name="message"></textarea>
            </div>
            <button type="submit" className="feedback-popup-form-contacts__btn">
              Заказать обратный звонок
            </button>
            <div className="feedback-popup-form-contacts__bottom">
              <div className="feedback-popup-form-contacts__icon">
                <StaticImage
                  src="../images/shield.png"
                  alt=""
                  placeholder="none"
                />
              </div>
              <div className="feedback-popup-form-contacts__confidentiality">
                Мы гарантируем конфиденциальность данных
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainFullScreen;
