import React from "react";
import HeaderSideBarIcon from "@/components/ui/layout/headerSideBarIcon";

function Header() {
  return (
    <header className="header">
      <div className="header-blur"></div>
      <div className="container">
        <HeaderSideBarIcon />
      </div>
    </header>
  );
}

export default Header;
