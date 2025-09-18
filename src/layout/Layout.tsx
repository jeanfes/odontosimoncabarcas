import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import "./layout.scss";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div className="layout">
      <Header />
      <div id="top-sentinel" style={{ width: "100%" }} />
      <main className="layout__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
