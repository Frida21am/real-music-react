import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";

import GiftIcon from "../components/ui/icons/GiftIcon";
import WhatsAppIcon from "../components/ui/icons/WhatsAppIcon";
import BackToTopButton from "../components/ui/icons/BackToTopButton";
import Header from "./header";
import Footer from "./footer";
import ContextProviders from "@/components/contextsProvider";
import ClientOnly from "@/components/ClientOnly";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ContextProviders>
          <div className="wrapper">
            <Header />
            <main>
              <ClientOnly>
                {children}
                <GiftIcon />
                <WhatsAppIcon />
                <BackToTopButton />
              </ClientOnly>
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
        </ContextProviders>
      </body>
    </html>
  );
}
