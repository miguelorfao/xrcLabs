import React from "react";

import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
function Header({ btnClass, onClick, label, children }) {
  const navigate = useNavigate();

  return (
    <header>
      <div className="p-2 bg-[#A59F9F]">{children}</div>
    </header>
  );
}

export default Header;
