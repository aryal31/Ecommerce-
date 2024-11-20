import { useEffect, useState } from "react";
import Top from "../components/common/Top";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import { Outlet } from "react-router-dom";
import Smallnavbar from "../components/Layout/Smallnavbar";

const Layout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Top />
      {windowWidth > 1032 ? <Navbar /> : <Smallnavbar />}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
