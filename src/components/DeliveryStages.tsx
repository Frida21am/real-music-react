import React from "react";
import { motion } from "framer-motion";

const animationStages = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.5 },
  }),
};

function DeliveryStages() {
  return (
    <div className="delivery-stages">
      <h3 className="delivery-stages__title">Как всё будет происходить?</h3>
      <hr className="delivery-stages-line" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="delivery-stages__row"
      >
        <motion.div
          custom={1}
          variants={animationStages}
          className="delivery-stages__item"
        >
          <p className="delivery-stages__item-number">01</p>
          <p className="delivery-stages__item-caption">Оформление</p>
          <p className="delivery-stages__item-text">
            Вы оформляете заказ на сайте. Либо можете связаться с нами через
            Авито или WhatsApp
          </p>
        </motion.div>
        <motion.div
          custom={2}
          variants={animationStages}
          className="delivery-stages__item"
        >
          <p className="delivery-stages__item-number">02</p>
          <p className="delivery-stages__item-caption">Подтверждение</p>
          <p className="delivery-stages__item-text">
            Мы звоним для подтверждения заказа. Консультируем по товару и
            согласовываем с Вами день и время доставки
          </p>
        </motion.div>
        <motion.div
          custom={3}
          variants={animationStages}
          className="delivery-stages__item"
        >
          <p className="delivery-stages__item-number">03</p>
          <p className="delivery-stages__item-caption">Отправление</p>
          <p className="delivery-stages__item-text">
            Собираем заказ, проверяем, упаковываем и передаём в транспортную
            компанию
          </p>
        </motion.div>
        <motion.div
          custom={4}
          variants={animationStages}
          className="delivery-stages__item"
        >
          <p className="delivery-stages__item-number">04</p>
          <p className="delivery-stages__item-caption">Доставка до двери</p>
          <p className="delivery-stages__item-text">
            В назначенный день, в выбранный Вами диапазон времени курьер
            привозит Ваш заказ.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default DeliveryStages;
