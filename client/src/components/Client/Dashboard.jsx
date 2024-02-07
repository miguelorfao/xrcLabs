import React, { useEffect, useState } from "react";

// import Buttons from "../Buttons";
import Collab from "../Collab";
import Entries from "../Entries";
import DiscordUsers from "../DiscordUsers";
import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import Header from "../Header";
import "./Scrollbar.css";
import useDiscordUserData from "./api";
import "@fontsource/roboto";

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
    <div className="cursor-default font-roboto   overflow-y-scroll scrollbar-thumb-blue scrollbar-track-blue">
      <Header>
        {/* <i
          class="fa-solid z-50 lg:hidden block text-black cursor-pointer relative top-1 left-3 px-2 py-1 border-2 border-slate-500 rounded-lg fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i> */}
        <h3 className="relative left-20 top-2">zrcLabs</h3>

        <div className="h-2 relative left-28 -top-8 text-center">
          <h3>
            Welcome&nbsp;
            <span id="userName" className="text-uppercase">
              {userName}
            </span>
          </h3>
        </div>
      </Header>
      <SideNav />
      {/* <SideNav show={isOpen} /> */}
      {/* User */}
      <div
        className={`min-h-screen row dashboard left-[22%] w-[78.9%] bg-[#D9D9D9] top-14 relative justify-content-center   ${
          isOpen ? "opacity-70 z-20 bg-[#D9D9D9]" : ""
        }`}
      >
        <h3 className="h-2 relative -left-7 text-center">
          Dashboard{" "}
          <span id="userName" className="text-uppercase">
            
          </span>
        </h3>
        <div className="relative -top-32 flex">
        <div className=" w-72 text-center  justify-content-center mb-3">
          <Collab />
        </div>
        <div className=" w-72 text-center  justify-content-center mb-3">
          <Entries />
        </div>
        <div className=" w-72 text-center  justify-content-center mb-3">
          <DiscordUsers />
        </div>
        </div>
        {/* <div className="col-12 col-md-12 text-center gap-2 d-flex justify-content-between mb-3"></div> */}
      </div>
    </div>
  );
}

export default Dashboard;
