import Header from "./Header";
import Footer from "./Footer";
import React, { ReactNode } from "react";
import GiftIcon from "../GiftIcon";
import WhatsAppIcon from "../WhatsAppIcon";
import BackToTopButton from "../BackToTopButton";
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
