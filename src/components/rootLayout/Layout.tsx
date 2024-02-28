import AuthModal from "../auth/AuthModal";
import Login from "../auth/Login";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <AuthModal />
      <Footer />
    </>
  );
};

export default Layout;
