import { motion } from "framer-motion"

const animationAdvantages = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.1, duration: 0.3 },
  }),
}

function DeliveryAdvantages() {
  return (
    <div className="delivery-advantages">
      <h2 className="delivery-advantages__title">Доставка по Москве</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="delivery-advantages__row"
      >
        <h3 className="delivery-advantages__caption">Доставка в день заказа</h3>
        <motion.div custom={1} variants={animationAdvantages} className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>
            После оформления заказа с менеджером доставка производится по тарифам курьерских служб Достависта и Яндекс
          </p>
        </motion.div>
        <motion.div custom={2} variants={animationAdvantages} className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>Доставка осуществляется в интервале с 11:00 до 22:00 часов</p>
        </motion.div>
        <motion.div custom={3} variants={animationAdvantages} className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>Есть доставка ко времени, выбирайте удобный интервал не менее 1 часа</p>
        </motion.div>
        <motion.div custom={4} variants={animationAdvantages} className="delivery-advantages__item">
          <img src="/delivery/checked2.png" alt="checked" />
          <p>
            Мы поможем поднять до дверей крупногабаритный товар, а также собрать цифровое пианино. Услуги по подъему и
            сборке оплачиваются отдельно
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default DeliveryAdvantages
