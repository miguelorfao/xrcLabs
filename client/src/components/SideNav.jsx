import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import logoImages from "../images/avatar.jpeg";
import Header from "./Header";
function SideNav({ setUserImage, setUserName, show }) {
  const [isOpen, setIsOpen] = useState(false);
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
  };
  return (
    <div>
      <div className={show ? "sidenav active" : "sidenav pt-4"}>
        <ul
          className=" w-100 gap-3 pt-5 nav nav-pills  align-items-center align-items-sm-start"
          id="menu"
        >
          <li className="nav-item w-100">
            <Buttons
              onClick={onClickHandleDashboard}
              label="Dashboard"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li className="nav-item w-100">
            <Buttons
              onClick={onClickHandleCollabStat}
              label="Collab Statistics"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li className="nav-item w-100">
            <Buttons
              onClick={onClickHandleCollabSheet}
              label="Collab Sheet"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li className="nav-item w-100">
            <Buttons
              onClick={onClickHandleDiscordStats}
              label="Discord Statists"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li className="nav-item w-100">
            <Buttons
              onClick={onClickHandleRefresh}
              label="Request a refresh"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleProjectSettings}
              label="Project Settings"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li className="nav-item w-100">
            <Buttons
              onClick={onClickHandleProjectWL}
              label="Request a Project WL"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
        </ul>
        <ul className="pt-5 nav nav-pills  align-items-center align-items-sm-start bottom-0 position-fixed">
          <li className="nav-item signOut">
            {" "}
            <Buttons
              onClick={onClickHandleSignOut}
              label="Sign Out"
              btnClass="btn  w-100 text-primary bg-primary  text-start px-5 mb-2"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideNav;
