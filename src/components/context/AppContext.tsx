import React, { useState, useEffect, ReactNode } from "react";

export const AppContext = React.createContext([{}, () => {}]);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    if (process.browser) {
      let cartData = localStorage.getItem("woo-next-cart");
      cartData = null !== cartData ? JSON.parse(cartData) : "";
      setCart(cartData);
    }
  }, []);

  return (
    <AppContext.Provider value={[cart, setCart]}>
      {children}
    </AppContext.Provider>
  );
};
