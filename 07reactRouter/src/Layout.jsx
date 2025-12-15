import React from "react";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router";

function Layout() {
  return (
    <>
      <Header />
      {/* hum chahe to Header footer same rakh kr outlet change kr skte */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
