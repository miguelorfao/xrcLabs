import React from "react";

function Header({ btnClass, onClick, label, children }) {
  return (
    <header className="border">
      <div className="admin-header w-100  my-1">{children}</div>
    </header>
  );
}

export default Header;
