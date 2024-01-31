import React from "react";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";

function Main() {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API;

  const onClickHandle = () => {
    window.location.replace(url);
  };
  const onClickAdminHandle = () => {
    window.location.replace("/Admin");
  };
  return (
    <div className="hero main">
      <div class="gallery">
        <img
          src="https://picsum.photos/id/1059/300/300"
          alt="many clothes and pictures"
        />
        <img
          src="https://picsum.photos/id/1060/300/300"
          alt="someone preparing artisanal coffee"
        />
        <img src="https://picsum.photos/id/225/300/300" alt="some tee" />
        <img
          src="https://picsum.photos/id/163/300/300"
          alt="an empty table in a restaurant"
        />
        <img
          src="https://picsum.photos/id/180/300/300"
          alt="a laptop with a notebook"
        />
        <img
          src="https://picsum.photos/id/20/300/300"
          alt="a laptop and many books around it"
        />
      </div>
      <div>
        <h1 className="mb-4">Welcome to ZCRLABS</h1>
        <Buttons
          label="Login with Discord"
          btnClass="btn btn-primary w-100 p-2 rounded-pill mb-5"
          onClick={onClickHandle}
        />

        <Buttons
          label="Login as Admin"
          btnClass="btn btn-primary w-100 p-2 rounded-pill"
          onClick={onClickAdminHandle}
        />
      </div>
    </div>
  );
}

export default Main;
