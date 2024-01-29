import React from "react";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import Buttons from "../components/Buttons";

function Main() {
  const navigate = useNavigate();
  const url =
    "https://discord.com/api/oauth2/authorize?client_id=1195330764565389332&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FDashboard&scope=identify";

  const onClickHandle = () => {
    window.location.replace(url);
  };
  return (
    <div>
      <div className="hero">
        <div>
          <h2 className="mb-4">Welcome to ZCRLABS</h2>
          <Buttons
            label="Login with Discord"
            btnClass="btn btn-primary w-100 p-2 rounded-pill"
            onClick={onClickHandle}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
