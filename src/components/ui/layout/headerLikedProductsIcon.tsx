"use client";

import Image from "next/image";
import { useState } from "react";
import WishList from "../../WishList";
import ShoppingCart from "@/components/ui/popups/ShoppingCart";
import useGetLikedProductsCount from "@/hooks/useGetLikedProductsCount";
import useGetProductsInCartCount from "@/hooks/useGetProductsInCartCount";

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
            <Image src="/images/like.png" alt="" width={21} height={21} />
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
            <Image src="/images/basket.png" alt="" width={21} height={21} />
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
