import React from "react";

import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
function Header({ btnClass, onClick, label, children }) {
  const navigate = useNavigate();

  return (
    <header>
      <div className="bg-dark p-2">{children}</div>
    </header>
  );
}

export default Header;
