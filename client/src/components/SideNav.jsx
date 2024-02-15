import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import logoImages from "../images/avatar.jpeg";
import '@fontsource/roboto'; 



import useDiscordUserData from "./Client/api";
const myCustomColor = '#A59F9F'
function SideNav({ show }) {
  const navigate = useNavigate();

  const onClickHandleDashboard = () => {
    navigate("/Dashboard");
  };
  const onClickHandleCollabStat = () => {
    navigate("/CollabAnalytics");
  };
  const onClickHandleCollabSheet = () => {
    navigate("/EntrySheet");
  };
  const onClickHandleDiscordStats = () => {
    navigate("/DiscordStats");
  };
  const onClickHandleProjectSettings = () => {
    navigate("/ProjectSettings");
  };
  const onClickHandleRefresh = () => {
    navigate("/ScheduleCall");
  };
  const onClickHandleProjectWL = () => {
    navigate("/RequestWhitelist");
  };
  const onClickHandleSignOut = () => {
    navigate("/");
    window.location.reload();
  };

  const { userName, userImage, userBannerColor } = useDiscordUserData();

  return (
    <div 
    // style={{ backgroundColor: myCustomColor }}
    //  className={show ? "sidenav active z-30 relative min-h-screen top-0  pt-5 font-roboto" : "sidenav"}>
     className=" w-72  active z-30 fixed min-h-screen bg-white top-0 text-gray-200  pt-5 font-roboto">
    <div className="flex justify-center text-center relative  w-60 rounded-xl py-1 -left-6 top-7">
    
     <h3 className="text-base whitespace-nowrap mt-3 pl-24 font-semibold relative -left-7  uppercase">#project name</h3>
    </div>
      <ul className="pt-5 nav nav-pills mt-1 text-start justify-start w-100 ">
        <li className="nav-item pl-14 hover:bg-[#615bff4b] hover:from-pink-500 hover:to-blue-500 hover:text-[#605BFF] w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleDashboard}
            label="Dashboard"
            btnClass="btn  w-100 text-gray-50 bg-[#9D9797] text-[#030229] text-start  "
            
          />
        </li>
        <li className="nav-item pl-14 hover:text-[#605BFF] text-[#030229] w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleCollabStat}
            label="Collab Analytics"
            btnClass="btn  w-100  bg-[#9D9797] text-start "
          />
        </li>
        <li className="nav-item pl-14 hover:text-[#605BFF] text-[#030229] w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleCollabSheet}
            label="Entry Sheet"
            btnClass="btn  w-100  bg-[#9D9797]  text-start "
          />
        </li>
        {/* <li className="nav-item pl-14 hover:text-[#605BFF] text-[#030229] w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleDiscordStats}
            label="Discord Statists"
            btnClass="btn  w-100  bg-[#9D9797]  text-start "
          />
        </li> */}
        <li className="nav-item pl-14 hover:text-[#605BFF] text-[#030229] w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleProjectSettings}
            label="Project Settings"
            btnClass="btn  w-100  bg-[#9D9797]  text-start "
          />
        </li>
        <li className="nav-item pl-14 hover:text-[#605BFF] text-[#030229] w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleRefresh}
            label="Schedule call"
            btnClass="btn  w-100  bg-[#9D9797]  text-start "
          />
        </li>
        <li className="nav-item pl-14 hover:text-[#605BFF] text-[#030229] w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleProjectWL}
            label="Request Whitelist"
            btnClass="btn  w-100  bg-[#9D9797]  text-start "
          />
        </li>
        
      </ul>

      <ul
        class=" w-100 gap-3 nav nav-pills  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
        id="menu"
      >
        <li></li>
        <li className="nav-item w-100"></li>
        <li className="nav-item w-100"></li>
        <li className="nav-item w-100"></li>
        <li class="nav-item w-100"></li>
        <li className="nav-item w-100"></li>
      </ul>
      <ul>
        <li className="nav-item signOut"> </li>
      </ul>
    </div>
  );
}

export default SideNav;
