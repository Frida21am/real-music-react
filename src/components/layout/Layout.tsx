import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/index.scss";
import Header from "./Header";
import Footer from "./Footer";
import GiftIcon from "../../icons/GiftIcon";
import WhatsAppIcon from "../../icons/WhatsAppIcon";
import BackToTopButton from "../../icons/BackToTopButton";
import ProductsInWishlistContext from "../context/ProductsInWishlistContext";
import ProductsInOrderContext from "../context/ProductsInOrderContext";
import useLocalStorage from "../../hooks/useLocalStorage";

function Layout(props: { children: ReactNode }) {
  const [liked, setLike] = useLocalStorage([], "like");
  const addToLiked = (id: string) => {
    if (!liked.includes(id)) {
      setLike((oldLiked: string[]) => [...oldLiked, id]);
    }
  };
  const removeFromLiked = (id: string) => {
    setLike((oldLiked: string[]) => oldLiked.filter((item) => item !== id));
  };

  const [order, setOrder] = useLocalStorage([], "order");
  const addToOrder = (id: string) => {
    if (!order.includes(id)) {
      setOrder((oldOrder: string[]) => [...oldOrder, id]);
    }
  };
  const removeFromOrder = (id: string) => {
    setOrder((oldOrder: string[]) => oldOrder.filter((item) => item !== id));
  };

  const value = {
    liked,
    addToLiked,
    removeFromLiked,
    order,
    addToOrder,
    removeFromOrder,
  };

  return (
    <ProductsInOrderContext.Provider value={value}>
      <ProductsInWishlistContext.Provider value={value}>
        <div className="wrapper">
          <Header />
          <main>
            {props.children}
            <GiftIcon />
            <WhatsAppIcon />
            <BackToTopButton />
          </main>
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover={false}
            draggable
            theme="light"
          />
          <Footer />
        </div>
      </ProductsInWishlistContext.Provider>
    </ProductsInOrderContext.Provider>
  );
}

export default Layout;
