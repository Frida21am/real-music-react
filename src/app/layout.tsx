import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/index.scss";
import GiftIcon from "../components/ui/icons/GiftIcon";
import WhatsAppIcon from "../components/ui/icons/WhatsAppIcon";
import BackToTopButton from "../components/ui/icons/BackToTopButton";
import Header from "./header";
import Footer from "./footer";
import ContextProviders from "@/components/contextsProvider";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <ContextProviders>
          <div className="wrapper">
            <Header />
            <main>
              {children}
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
        </ContextProviders>
      </body>
    </html>
  );
}

export default Layout;
