import React, { Children } from "react";
import NavigationBar from "./NavigationBar";
import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
function Header({ btnClass, onClick, label }) {
  const navigate = useNavigate();

  const onclickHandler = () => {
    navigate("/SetUp");
  };
  return (
    <div>
      <ul className="me-5  mb-2 mb-lg-0 w-25">
        <button className={btnClass} onClick={onClick}>
          {label}
        </button>
      </ul>
    </div>
  );
}

export default Header;
