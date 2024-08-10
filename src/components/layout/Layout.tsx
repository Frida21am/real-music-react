import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";
import GiftIcon from "../../icons/GiftIcon";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import BackToTopButton from "../../icons/BackToTopButton";
import "../../styles/index.scss";

function Layout(props: { children: ReactNode }) {
  return (
    <div className="wrapper">
      <Header />
      <main>
        {props.children}
        <GiftIcon />
        <WhatsAppIcon />
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
