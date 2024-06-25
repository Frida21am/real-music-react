import MainFullScreen from "../fullscreens/MainFullScreen.tsx"
import Products from "../entities/Products.tsx"

function PageCatalog() {
  return (
    <div className="catalog">
      <MainFullScreen />

      <div className="container">
        <Products />
      </div>
    </div>
  )
}

export default PageCatalog
