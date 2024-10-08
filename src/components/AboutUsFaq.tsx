import React from "react";
import { Collapse, CollapseProps, ConfigProvider } from "antd";
import { motion } from "framer-motion";

const faqQuestions: CollapseProps["items"] = [
  {
    key: "1",
    label: "Какие бренды музыкальных инструментов у вас есть в наличии?",
    children: `Мы предлагаем широкий ассортимент продукции от ведущих мировых производителей, включая Yamaha, Casio, Nux, Caraya, Harley Benton, Root Note, Cort, Parkwood, Bosstone, Joyo, Roland, Enya, Ramis, Artesia, Ringway, Dekko, Deviser, Clevan, Jet, Shinobi, Aria Pro, Rolling Rock и многие другие`,
  },
  {
    key: "2",
    label: "Есть ли у вас инструменты для начинающих?",
    children: `Да, вы можете вернуть или обменять товар в течение 30 дней после покупки, при условии сохранения товарного вида и наличия чека, за исключением аксессуаров и музыкальных инструментов, которые имеют электронику (на них возврат возможен только по гарантийным обстоятельствам)`,
  },
  {
    key: "3",
    label: "Могу ли я вернуть или обменять купленный инструмент?",
    children: `Да, вы можете вернуть или обменять товар в течение 30 дней после покупки при условии сохранения товарного вида и наличия чека.`,
  },
  {
    key: "4",
    label: "Предоставляете ли вы гарантию на инструменты?",
    children: `Да, на все наши инструменты распространяется гарантия производителя, срок которой может варьироваться в зависимости от бренда и модели.`,
  },
  {
    key: "5",
    label: "Можно ли заказать инструмент, которого нет в наличии?",
    children: `Конечно, мы можем оформить предзаказ на любой инструмент, который в данный момент отсутствует в наличии.`,
  },
  {
    key: "6",
    label: "Предлагаете ли вы уроки игры на музыкальных инструментах?",
    children: `Нет, но мы сотрудничаем с различными проверенными музыкальными школами, и будем рады предложить их на индивидуальных условиях.`,
  },
  {
    key: "7",
    label: "Какие способы оплаты вы принимаете?",
    children: `Мы принимаем наличные, безнал (кредитные и дебетовые карты), QR, и также выставляем при необходимости счет для юридических лиц.`,
  },
  {
    key: "8",
    label: "Есть ли у вас доставка и сколько она стоит?",
    children: `Да, мы осуществляем доставку по всей стране. Стоимость доставки зависит от веса заказа и региона доставки. Более точную информацию можно узнать у нас позвонив нам по номеру, либо написать нам на what's up.`,
  },
];

const animationQuestions = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

function AboutUsFaq() {
  return (
    <div className="about-faq" id="about-faq">
      <h2 className="about-faq__title">Часто задаваемые вопросы</h2>
      <ConfigProvider
        theme={{
          token: {
            fontSize: 20,
            fontSizeIcon: 20,
            colorTextHeading: "#eb971a",
            colorBorder: "#EEEEEE",
          },
          components: {
            Collapse: {
              contentBg: "#EEEEEE",
              headerBg: "#EEEEEE",
            },
          },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: true }}
          variants={animationQuestions}
        >
          <Collapse
            items={faqQuestions}
            defaultActiveKey={["0"]}
            className="about-faq__accordion"
          />
        </motion.div>
      </ConfigProvider>
    </div>
  );
}

export default AboutUsFaq;
