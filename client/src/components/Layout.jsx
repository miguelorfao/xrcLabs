import React, { Children } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
