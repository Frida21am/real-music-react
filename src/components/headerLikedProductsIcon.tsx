"use client";

import Image from "next/image";
import { useState } from "react";
import WishList from "./WishList";
import ShoppingCart from "@/popups/ShoppingCart";
import useGetLikedProductsCount from "@/hooks/useGetLikedProductsCount";
import useGetProductsInCartCount from "@/hooks/useGetProductsInCartCount";

import basketImg from "../../public/images/basket.png";
import likesImg from "../../public/images/like.png";

function HeaderLikedProductsIcon() {
  const [isWishListOpen, setIsWishListOpen] = useState<boolean>(false);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const likedProductsCount = useGetLikedProductsCount();
  const productsInCartCount = useGetProductsInCartCount();

  return (
    <div className="header__addprod">
      <div
        className="header__addprod_likes"
        onClick={() => setIsWishListOpen(true)}
      >
        <div className="header__addprod-image">
          <div>
            <Image src={likesImg} alt="" />
          </div>
        </div>
        <span>{likedProductsCount}</span>
      </div>
      <div
        className="header__addprod_cart"
        onClick={() => setIsPopupOpen(true)}
      >
        <div className="header__addprod-image">
          <div>
            <Image src={basketImg} alt="" />
          </div>
        </div>
        <span>{productsInCartCount}</span>
      </div>
      <WishList
        isWishListOpen={isWishListOpen}
        onWishListClosing={setIsWishListOpen}
      />
      <ShoppingCart isPopupOpen={isPopupOpen} onPopupClosing={setIsPopupOpen} />
    </div>
  );
}

export default HeaderLikedProductsIcon;
