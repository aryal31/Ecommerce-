import React from "react";
import Top from "../components/Top";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Top />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
