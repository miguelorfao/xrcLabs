import React from "react";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const url =
    "https://discord.com/api/oauth2/authorize?client_id=1195330764565389332&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FDashboard&scope=identify";

  const onClickHandle = () => {
    window.location.replace(url);
  };
  return (
    <div>
      <Header
        label="Login With Discord"
        btnClass="btn btn-outline-primary"
        onClick={onClickHandle}
      />
      <div className="main-page">
        <div className="container text-center">
          <div className="row shadows p-5">
            <div className="col-12 col-md-12">
              <h3>Welcome where the WEB3 awaits you!!</h3>
            </div>
            <div className="col-6">
              <p>text</p>
            </div>
            <div className="col-6">
              <p>text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
