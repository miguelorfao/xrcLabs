import React from "react";
import Buttons from "./Buttons";


// import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
function Header({ btnClass, onClick, label, children }) {


  const navigate = useNavigate();


  const onClickHandleSignOut = () => {
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="fixed w-[100%] h-16 z-40">
      <div className="p-2 bg-[#A59F9F]">{children}</div>
      {/* <li className="pt-5 nav nav-pills  align-items-center align-items-sm-start bottom-0 position-fixed"> */}
          {" "}
          <Buttons
            onClick={onClickHandleSignOut}
            label="Log Out"
            btnClass="btn float-right left-[84%] -top-14 relative w-100 text-primary bg-[#8A57DE]  text-start px-5 mb-2 text-white"
          />
        {/* </li> */}
    </header>
  );
}

export default Header;
