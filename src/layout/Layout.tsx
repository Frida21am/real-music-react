import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import GiftIcon from "../components/GiftIcon"
import BackToTopButton from "../components/BackToTopButton"

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
        <GiftIcon />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
