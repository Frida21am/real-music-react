import { motion } from "framer-motion"

const animationImportant = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.5 },
  }),
}

function DeliveryImportant() {
  return (
    <div className="delivery-important">
      <h3 className="delivery-important__title">Важно:</h3>
      <hr className="delivery-important-line" />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5, once: true }}
        className="delivery-important-list"
      >
        <motion.li custom={1} variants={animationImportant}>
          <span>При получении заказа необходимо проверить внешний вид и комплектность товара,</span> а также
          комплектность всего заказа. После получения заказа претензии к внешним дефектам товара, его количеству,
          комплектности и товарному виду не принимаются
        </motion.li>
        <motion.li custom={2} variants={animationImportant}>
          <span>Курьеры принимают к оплате только наличные, либо перевод на карту,</span> так как у них нет терминалов
          для оплаты картой. Вы можете оплатить заказ картой заранее либо по терминалу в нашем магазине
        </motion.li>
        <motion.li custom={3} variants={animationImportant}>
          <span>Доставка в торговые и бизнес-центры</span> осуществляется только до главного входа
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default DeliveryImportant
