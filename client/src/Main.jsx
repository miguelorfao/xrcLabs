import React from "react";

import Header from "./components/Header";
import { useNavigate } from "react-router-dom";
import Buttons from "./components/Buttons";
import img from "./images/nft.jpeg";
function Main() {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_API;

  const onClickHandle = () => {
    window.location.replace(url);
  };
  const onClickAdminHandle = () => {
    window.location.replace("/AdminLogin");
  };
  return (
    <div className="hero main">
      <div className="container">
        <div className="row text-center">
          <div className="col-12 mb-5 text-center">
            <h1 className="mb-4">ZCRLABS</h1>
          </div>
          <div className="col-12  mb-5 d-flex justify-center align-middle gap-3">
            <img src={img} alt="many clothes and pictures" className="img1" />
            <img src={img} alt="many clothes and pictures" className="img" />
            <img
              src={img}
              alt="someone preparing artisanal coffee"
              className="img2"
            />
          </div>
          <div className="col-12 my-5 d-flex justify-center ">
            <div className="w-100 mt-5">
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
        </div>
      </div>
    </div>
  );
}

export default Main;
