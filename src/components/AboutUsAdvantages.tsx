import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

const animationScale = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

function AboutUsAdvantages() {
  return (
    <div className="about-advantages">
      <h2 className="about-advantages__title">Наши преимущества:</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="about-advantages__row"
      >
        <motion.div
          custom={1}
          variants={animationScale}
          className="about-advantages__item"
        >
          <div className="about-advantages__item-icon">
            <Image
              src="../images/advantagesIcons/repair&rental.png"
              alt="repair&rental"
            />
          </div>
          <div className="about-advantages__item-text">
            <span>Ремонт и Аренда музыкальных инструментов</span>
          </div>
        </motion.div>
        <motion.div
          custom={1}
          variants={animationScale}
          className="about-advantages__item"
        >
          <div className="about-advantages__item-icon">
            <Image src="../images/advantagesIcons/service.png" alt="service" />
          </div>
          <div className="about-advantages__item-text">
            <span>Высокий уровень сервиса</span>
          </div>
        </motion.div>
        <motion.div
          custom={1}
          variants={animationScale}
          className="about-advantages__item"
        >
          <div className="about-advantages__item-icon">
            <Image
              src="../images/advantagesIcons/gifts&discounts.png"
              alt="gifts&discounts"
            />
          </div>
          <div className="about-advantages__item-text">
            <span>Дарим подарки и делаем скидки!</span>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={animationScale}
          className="about-advantages__item"
        >
          <div className="about-advantages__item-icon">
            <Image
              src="../images/advantagesIcons/location.png"
              alt="location"
            />
          </div>
          <div className="about-advantages__item-text">
            <span>Магазин в Москве недалеко от метро</span>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={animationScale}
          className="about-advantages__item"
        >
          <div className="about-advantages__item-icon">
            <Image
              src="../images/advantagesIcons/delivery.png"
              alt="delivery"
            />
          </div>
          <div className="about-advantages__item-text">
            <span>Доставка день в день</span>
          </div>
        </motion.div>
        <motion.div
          custom={2}
          variants={animationScale}
          className="about-advantages__item"
        >
          <div className="about-advantages__item-icon">
            <Image
              src="../images/advantagesIcons/guarantee.png"
              alt="guarantee"
            />
          </div>
          <div className="about-advantages__item-text">
            <span>Гарантия на каждый инструмент</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutUsAdvantages;
