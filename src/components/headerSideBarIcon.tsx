"use client";

import { useState } from "react";
import HeaderLikedProductsIcon from "./headerLikedProductsIcon";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import avitoImg from "../../public/images/delivery/avito.png";
import logoImg from "../../public/images/logo12.png";
import phoneCallImg from "../../public/images/phone-call.png";

function HeaderSideBarIcon() {
  const sideBarMenu = [
    {
      href: "/",
      name: "Каталог",
    },
    {
      href: "/about-us/",
      name: "О нас",
    },
    {
      href: "/blog/",
      name: "Наш блог",
    },
    {
      href: "/delivery/",
      name: "Доставка",
    },
  ];

  const currentPath = usePathname();

  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  function closeSideBar() {
    if (sideBarIsOpen) {
      setSideBarIsOpen(!sideBarIsOpen);
    }
  }
  return (
    <div className="header-row">
      <div className="header__logo">
        <a href="/" className="header__logo_image">
          <Image
            className="header__logo_image"
            src={logoImg}
            alt=""
            width={50}
            height={50}
          />
        </a>
      </div>
      <div className="header__phone">
        <div className="header__phone-item">
          <div>
            <Image src={phoneCallImg} alt="" />
          </div>
          <a href="tel:89943336688">8-994-333-66-88</a>
        </div>
        <div className="header__phone-item">
          <div>
            <Image src={phoneCallImg} alt="" />
          </div>
          <a href="tel:89680556655">8-968-055-66-55</a>
        </div>
      </div>
      <nav className={sideBarIsOpen ? "header__nav active" : "header__nav"}>
        <div className="header__nav_list">
          {sideBarMenu.map((el) => (
            <Link
              key={el.href}
              className={
                el.href == currentPath
                  ? "header__nav-list__item active"
                  : "header__nav-list__item"
              }
              href={el.href}
              onClick={() => {
                closeSideBar();
              }}
            >
              {el.name}
            </Link>
          ))}
          <li key="contacts">
            <span
              onClick={() => {
                const contacts = document.getElementById("contacts");
                contacts?.scrollIntoView({
                  behavior: "smooth",
                });
                closeSideBar();
              }}
            >
              Контакты
            </span>
          </li>
          <li key="avito">
            <Image src={avitoImg} alt="" />
            <a
              href="https://www.avito.ru/brands/i224952978/all/muzykalnye_instrumenty?gdlkerfdnwq=101&page_from=from_item_header&iid=3183987440&sellerId=4a2d802f13e360fb2496b6d7bcccca0e"
              onClick={() => closeSideBar()}
              target="_blank"
            >
              Мы на Авито
            </a>
          </li>
        </div>
      </nav>
      <HeaderLikedProductsIcon />
      <div
        className={sideBarIsOpen ? "icon-menu active" : "icon-menu"}
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default HeaderSideBarIcon;
