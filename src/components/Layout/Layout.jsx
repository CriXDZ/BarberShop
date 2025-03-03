import React from "react";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => (
  <div className="layout-container">
    {children}
    <Footer />
  </div>
);

export default Layout;
