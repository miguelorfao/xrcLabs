import React from "react";

import "../admin.css";
function Header({ btnClass, onClick, label, children }) {
  return (
    <header>
      <div className="admin-header p-2 border w-100">{children}</div>
    </header>
  );
}

export default Header;
