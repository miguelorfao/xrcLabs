import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import logoImages from "../images/avatar.jpeg";
function SideNav({setUserImage, setUserName, }) {
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
      <div className="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100 sideNav">
        <div className="d-flex align-items-center justify-content-around w-100">
          <div className="card text-bg-dark rounded-2 w-100">
            <img src={setUserImage} class="avatar" alt="..." />
            <div className="card-img-overlay d-flex justify-content-center align-items-center">
              <h3 className="card-title text-uppercase">{setUserName}</h3>
            </div>
          </div>
        </div>

        <span class="fs-5 d-none d-sm-inline w-100">Menu</span>

        <ul
          class=" w-100 gap-3 nav nav-pills  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleDashboard}
              label="Dashboard"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleCollabStat}
              label="Collab Statistics"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleCollabSheet}
              label="Collab Sheet"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleDiscordStats}
              label="Discord Statists"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
          <li class="nav-item w-100">
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
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleProjectWL}
              label="Request a Project WL"
              btnClass="btn  w-100 text-primary bg-primary  text-start"
            />
          </li>
        </ul>
        <hr />
        <div class="dropdown pb-4 w-100">
          <Buttons
            btnClass="btn bg-primary w-100"
            label="Sign Out"
            onClick={onClickHandleSignOut}
          />
        </div>
      </div>
    </div>
  );
}

export default SideNav;
