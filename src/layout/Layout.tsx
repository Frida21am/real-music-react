import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import GiftIcon from "../components/GiftIcon"
import BackToTopButton from "../components/BackToTopButton"
import WhatsAppIcon from "../components/WhatsAppIcon"

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
        <GiftIcon />
        <WhatsAppIcon />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
