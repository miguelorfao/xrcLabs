import React from "react";

function Header({ btnClass, onClick, label, children }) {
  return (
    <header className="border bg-white sticky top-0 z-10">
      <div className="admin-header w-100  my-1">{children}</div>
    </header>
  );
}

export default Header;
