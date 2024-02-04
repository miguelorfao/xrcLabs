import React, { useEffect, useState } from "react";

// import Buttons from "../Buttons";
import Collab from "../Collab";
import Entries from "../Entries";
import DiscordUsers from "../DiscordUsers";
import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import Header from "../Header";

import useDiscordUserData from "./api";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const { userName, userImage, userBannerColor } = useDiscordUserData();

  useEffect(() => {
    const disableScroll = () => {
      window.scrollTo(0, 0);
    };

    if (isOpen) {
      // Add event listener to disable scrolling
      window.addEventListener("scroll", disableScroll);
    } else {
      // Remove the event listener when navigation is closed
      window.removeEventListener("scroll", disableScroll);
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", disableScroll);
    };
  }, [isOpen]); // Dependency on isOpen ensures that this effect runs when isOpen changes

  return (
    <div className="cursor-default bg-black text-white">
      <Header>
        <i
          class="fa-solid z-50 text-white relative top-2 left-5 rounded-lg p-1 px-2 border fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </Header>
      <SideNav show={isOpen} />
      {/* User */}
      <div
        className={`min-h-screen row dashboard  justify-content-center w-100  ${isOpen ? "opacity-20 z-40" : ""}`}
      >
        <div className="col-12 col-md-12 mb-3 text-center">
          <h3>
            Welcome&nbsp;
            <span id="userName" className="text-uppercase">
              {userName}
            </span>
          </h3>
        </div>
        <div className="col-12 col-md-4 text-center d-flex justify-content-center mb-3">
          <Collab />
        </div>
        <div className="col-12 col-md-4 text-center d-flex justify-content-center mb-3">
          <Entries />
        </div>
        <div className="col-12 col-md-4 text-center d-flex justify-content-center mb-3">
          <DiscordUsers />
        </div>
        <div className="col-12 col-md-12 text-center gap-2 d-flex justify-content-between mb-3"></div>
      </div>
    </div>
  );
}

export default Dashboard;
