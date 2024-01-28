import React from "react";
import { useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import logoImages from "../images/avatar.jpeg";
function SideNav() {
  const navigate = useNavigate();
  const onClickHandleHome = () => {
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
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <div className="d-flex align-items-center justify-content-around w-100 my-4">
          <div>
            <img
              className="avatar-img rounded-circle"
              src={logoImages}
              alt="logo"
            />
            <p>UserName</p>
          </div>

          <Buttons
            onClick={onClickHandleHome}
            btnClass="btn  pb-3 mb-md-0 me-md-auto text-white  w-100 text-center"
            label="Menu"
          >
            <span class="fs-5 d-none d-sm-inline w-100">Menu</span>
          </Buttons>
        </div>

        <ul
          class=" w-100 gap-3 nav nav-pills  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleCollabStat}
              label="Collab Statistics"
              btnClass="btn  w-100 text-primary text-decoration-underline  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleCollabSheet}
              label="Collab Sheet"
              btnClass="btn  w-100 text-primary text-decoration-underline  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleDiscordStats}
              label="Discord Statists"
              btnClass="btn  w-100 text-primary text-decoration-underline  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleRefresh}
              label="Request a refresh"
              btnClass="btn  w-100 text-primary text-decoration-underline  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleProjectSettings}
              label="Project Settings"
              btnClass="btn  w-100 text-primary text-decoration-underline  text-start"
            />
          </li>
          <li class="nav-item w-100">
            <Buttons
              onClick={onClickHandleProjectWL}
              label="Request a Project WL"
              btnClass="btn  w-100 text-primary text-decoration-underline  text-start"
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
