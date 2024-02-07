import React from "react";
import Buttons from "./Buttons";
import useDiscordUserData from "./Client/api";


// import Button from "./Buttons";
import { useNavigate } from "react-router-dom";
function Header({ btnClass, onClick, label, children }) {


  const navigate = useNavigate();


  const onClickHandleSignOut = () => {
    navigate("/");
    window.location.reload();
  };

  const { userName, userImage, userBannerColor } = useDiscordUserData();


  return (
    <header className="fixed w-[100%] h-16 z-40">
      <div className="p-2 bg-white">{children}</div>
      {/* <li className="pt-5 nav nav-pills  align-items-center align-items-sm-start bottom-0 position-fixed"> */}
          {" "}
          {/* <Buttons
            onClick={onClickHandleSignOut}
            label="Log Out"
            btnClass="btn float-right left-[84%] -top-14 relative w-100 text-primary bg-[#8A57DE]  text-start px-5 mb-2 text-white"
          /> */}
        {/* </li> */}
      <img className="w-12 z-40 float-right relative -top-14 rounded-full -ml-14 -left-10" src={userImage} />
    </header>
  );
}

export default Header;
