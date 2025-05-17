import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import pochtaImg from "@images/delivery/pochta-rf.png";
import sdekImg from "@images/delivery/sdek.png";
import avitoImg from "@images/delivery/avito.png";
import boxberryImg from "@images/delivery/boxberry.png";

const animationCompanies = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.7 },
  }),
};

function DeliveryTransportCompanies() {
  return (
    <div className="delivery-companies">
      <h3 className="delivery-companies__title">
        Доставка по России осуществляется транспортными компаниями «до дверей»
        или пункта самовывоза. Ниже представлен основной список транспортных
        компаний:
      </h3>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="delivery-companies__row"
      >
        <motion.div
          custom={4}
          variants={animationCompanies}
          className="delivery-companies__item"
        >
          <div>
            <Image src={pochtaImg} alt="pochta-rf" />
          </div>
          <p>Почта России</p>
          <span>(2-5 дней)</span>
        </motion.div>
        <motion.div
          custom={3}
          variants={animationCompanies}
          className="delivery-companies__item"
        >
          <div>
            <Image src={sdekImg} alt="sdek" />
          </div>
          <p>СДЭК</p>
          <span>(2-7 дней)</span>
        </motion.div>
        <motion.div
          custom={2}
          variants={animationCompanies}
          className="delivery-companies__item"
        >
          <div>
            <Image src={avitoImg} alt="avito" />
          </div>
          <p>Авито доставка</p>
          <span>(2-5 дней)</span>
        </motion.div>
        <motion.div
          custom={1}
          variants={animationCompanies}
          className="delivery-companies__item"
        >
          <div>
            <Image src={boxberryImg} alt="boxberry" />
          </div>
          <p>Boxberry</p>
          <span>(2-7 дней)</span>
        </motion.div>
      </motion.div>

      <div className="delivery-companies__text">
        <p>
          Время доставки зависит от удаленности региона, при оформлении можно
          узнать примерный срок.
        </p>
        <p>Возможно рассмотрение других вариантов доставки.</p>
      </div>
      <div className="delivery-companies__button"></div>
    </div>
  );
}

export default DeliveryTransportCompanies;
