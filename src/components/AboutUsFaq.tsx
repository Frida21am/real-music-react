import { faqQuestions } from "../data/data"
import { Collapse, ConfigProvider } from "antd"
import { motion } from "framer-motion"

function AboutUsFaq() {
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
  }

  const onChange = (key: string | string[]) => {
    console.log(key)
  }

  return (
    <div className="about-faq">
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
            onChange={onChange}
          />
        </motion.div>
      </ConfigProvider>
    </div>
  )
}

export default AboutUsFaq
