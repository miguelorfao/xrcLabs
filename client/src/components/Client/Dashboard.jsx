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
import Dashboardchart from "../../images/dashboardchart.png";


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
    <div className="cursor-default font-roboto  overflow-x-hidden overflow-y-scroll scrollbar-thumb-blue scrollbar-track-blue">
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
        className={`min-h-screen overflow-x-hidden  left-[21%] w-[78.9%] pt-7 bg-[#E5E5E5] top-14 relative justify-content-center pb-40  ${
          isOpen ? "opacity-70 z-20 bg-[#E5E5E5]" : ""
        }`}
      >
        <h3 className="h-  relative -left-7 text-center font-semibold">
          Dashboard <span id="userName" className="text-uppercase"></span>
        </h3>
        <div className="relative top- space-x-4 left-12  flex">
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
        <div className="h-[80%] w-[83%] left-[5.1%] top-10 bg-white relative mb-3">
          <div className="pl-1">
            <h4 className="font-semibold text-base text-center relative top-5">
              User Growth
            </h4>
            <h4 className="font-semibold text-2xl float-right relative right-9 -top-5">
              ...
            </h4>
            <img className="-top-5" src={Dashboardchart} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
