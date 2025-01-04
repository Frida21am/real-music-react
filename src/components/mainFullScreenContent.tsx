"use client";

import Image from "next/image";
import { useState } from "react";
import ReactInputMask from "react-input-mask";

function MainFullScreenContent() {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  return (
    <>
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
    </>
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
              <Image src="/images/close.png" alt="" fill />
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
              {/* <ReactInputMask
                mask="+7 999 999 99 99"
                maskChar=" "
                className="tel"
                required
              /> */}
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
                <Image src="/images/shield.png" alt="" fill />
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

export default MainFullScreenContent;
