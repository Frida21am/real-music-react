import { ReactElement, useState } from "react"

export default function DetailDesc(props: { description: string; characteristics: { name: string; value: string }[] }) {
  return (
    <Tabs
      tabs={[
        {
          name: "Описание",
          content: props.description,
        },
        {
          name: "Характеристики",
          content: <CharacteristicsTab characteristics={props.characteristics} />,
        },
        {
          name: "Гарантия",
          content: `
			Мы предоставляем гарантию на все виды инструментов! Гарантия для укулеле составляет полгода, обмен или возврат инструмента возможен в течение двух недель после покупки (инструмент должен быть в идеальном состоянии)		
			`,
        },
        {
          name: "Оплата и доставка",
          content: `
			Доставка по Москве день в день, оплата при получении. Доставка по России транспортной компанией СДЭК или по договорённости, оплата наложенным платежом
			`,
        },
      ]}
    />
  )
}

function CharacteristicsTab(props: { characteristics: { name: string; value: string }[] }) {
  return (
    <div className="detail-tabs-content-item__list">
      {props.characteristics.map((prop) => (
        <div className="detail-tabs-content-item-property" key={prop.name}>
          <span className="detail-tabs-content-item-property__name">{prop.name}</span>
          <div className="detail-tabs-content-item-property__value">
            <span>{prop.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function Tabs(props: { tabs: { name: string; content: string | ReactElement }[] }) {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="detail-tabs">
      <div className="detail-tabs-nav">
        {props.tabs.map((el, index) => (
          <TabsNavItem
            key={index}
            name={el.name}
            changeTab={() => {
              setActiveIndex(index)
            }}
            active={activeIndex == index}
          />
        ))}
      </div>

      <div className="detail-tabs-content">
        <TabsContentItem title={props.tabs[activeIndex].name} content={props.tabs[activeIndex].content} />
      </div>
    </div>
  )
}

function TabsNavItem(props: { name: string; changeTab(): void; active: boolean }) {
  const navItemIsActive = "detail-tabs-nav-item detail-tabs-nav-item_active"
  const navItemIsntActive = "detail-tabs-nav-item"
  return (
    <div
      className={props.active ? navItemIsActive : navItemIsntActive}
      onClick={() => {
        props.changeTab()
      }}
    >
      <div className="detail-tabs-nav-title">{props.name}</div>
      <div className="detail-tabs-nav-bg"></div>
    </div>
  )
}

function TabsContentItem(props: { title: string; content: string | ReactElement }) {
  return (
    <div className="detail-tabs-content-item detail-tabs-content-item_act">
      <div className="detail-tabs-content-item__title">{props.title}</div>
      <div className="detail-tabs-content-item__content">{props.content}</div>
    </div>
  )
}
