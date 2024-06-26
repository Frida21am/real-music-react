import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import PageAboutUs from "./pages/PageAboutUs"
import PageOurBlog from "./pages/PageOurBlog"
import PageDelivery from "./pages/PageDelivery"
import PageCatalog from "./pages/PageCatalog"
import PageNotFound from "./pages/PageNotFound"
import PageProductDetails from "./pages/PageProductDetails"
import PageGifts from "./pages/PageGifts"
import PageArticleDetails from "./pages/PageArticleDetails"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<PageCatalog />} />
          <Route index path="product/:id" element={<PageProductDetails />} />
          <Route path="gifts" element={<PageGifts />} />
          <Route path="about" element={<PageAboutUs />} />
          <Route path="blog" element={<PageOurBlog />} />
          <Route index path="article/:id" element={<PageArticleDetails />} />
          <Route path="delivery" element={<PageDelivery />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
