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
