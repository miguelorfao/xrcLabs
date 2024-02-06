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
    navigate("/CollabStats");
  };
  const onClickHandleCollabSheet = () => {
    navigate("/CollabSheet");
  };
  const onClickHandleDiscordStats = () => {
    navigate("/DiscordStats");
  };
  const onClickHandleProjectSettings = () => {
    navigate("/ProjectChooseSettings");
  };
  const onClickHandleProjectWL = () => {
    navigate("/ProjectWL");
  };
  const onClickHandleRefresh = () => {
    navigate("/CollabSheet");
  };
  const onClickHandleSignOut = () => {
    navigate("/");
    window.location.reload();
  };

  const { userName, userImage, userBannerColor } = useDiscordUserData();

  return (
    <div 
    style={{ backgroundColor: myCustomColor }}
     className={show ? "sidenav active z-30 relative min-h-screen top-0  pt-5 font-roboto" : "sidenav"}>
    <div className="flex border-slate-500 justify-center text-center relative border w-60 rounded-xl py-1 -left-6 top-7">
    <img className="w-14 rounded-full -ml-14" src={userImage}/>
     <h3 className="text-base mt-3 font-semibold relative left-2 capitalize">{userName}</h3>
    </div>
      <ul className="pt-5 nav nav-pills mt-1 text-start justify-start w-100 text-white">
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleDashboard}
            label="Dashboard"
            btnClass="btn  w-100 text-primary bg-[#9D9797] text-start text-white "
            
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleCollabStat}
            label="Collab Statistics"
            btnClass="btn  w-100 text-primary bg-[#9D9797] text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleCollabSheet}
            label="Collab Sheet"
            btnClass="btn  w-100 text-primary bg-[#9D9797]  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleDiscordStats}
            label="Discord Statists"
            btnClass="btn  w-100 text-primary bg-[#9D9797]  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleRefresh}
            label="Request a refresh"
            btnClass="btn  w-100 text-primary bg-[#9D9797]  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleProjectSettings}
            label="Project Settings"
            btnClass="btn  w-100 text-primary bg-[#9D9797]  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleProjectWL}
            label="Request a Project WL"
            btnClass="btn  w-100 text-primary bg-[#9D9797]  text-start text-white"
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
