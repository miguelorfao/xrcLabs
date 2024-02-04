import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import logoImages from "../images/avatar.jpeg";



import useDiscordUserData from "./Client/api";
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
    navigate("/ProjectSettings");
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
    <div className={show ? "sidenav active z-40 relative top-1 pt-5" : "sidenav"}>
      <ul className="pt-5 nav nav-pills  align-items-center align-items-sm-start w-100 text-white">
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleDashboard}
            label="Dashboard"
            btnClass="btn  w-100 text-primary bg-primary text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleCollabStat}
            label="Collab Statistics"
            btnClass="btn  w-100 text-primary bg-primary text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleCollabSheet}
            label="Collab Sheet"
            btnClass="btn  w-100 text-primary bg-primary  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleDiscordStats}
            label="Discord Statists"
            btnClass="btn  w-100 text-primary bg-primary  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleRefresh}
            label="Request a refresh"
            btnClass="btn  w-100 text-primary bg-primary  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleProjectSettings}
            label="Project Settings"
            btnClass="btn  w-100 text-primary bg-primary  text-start text-white"
          />
        </li>
        <li className="nav-item w-100 mb-3">
          {" "}
          <Buttons
            onClick={onClickHandleProjectWL}
            label="Request a Project WL"
            btnClass="btn  w-100 text-primary bg-primary  text-start text-white"
          />
        </li>
        <li className="pt-5 nav nav-pills  align-items-center align-items-sm-start bottom-0 position-fixed">
          {" "}
          <Buttons
            onClick={onClickHandleSignOut}
            label="Sign Out"
            btnClass="btn  w-100 text-primary bg-primary  text-start px-5 mb-2 text-white"
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
