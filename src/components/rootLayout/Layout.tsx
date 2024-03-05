import AuthModal from "../auth/AuthModal";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className=" min-h-[calc(100dvh-91px)] ">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
