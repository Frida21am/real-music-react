import Products from "../entities/Products.tsx"

function PageCatalog() {
  return (
    <div className="catalog">
      <div className="fullscreen">
        <div className="container">
          <div className="fulscreen-caption">
            <h1 className="fulscreen-caption__title">Real Music</h1>
            <h2 className="fulscreen-caption__subtitle">Музыкальные инструменты в Москве</h2>
            <div className="fulscreen-caption__btn">
              <a href="#catalog">Каталог</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Products />
      </div>
    </div>
  )
}

export default PageCatalog
