import { faqQuestions } from "../data/data"
import { Collapse, ConfigProvider } from "antd"

function AboutUsFaq() {
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
        <Collapse items={faqQuestions} defaultActiveKey={["0"]} className="about-faq__accordion" onChange={onChange} />
      </ConfigProvider>
    </div>
  )
}

export default AboutUsFaq
