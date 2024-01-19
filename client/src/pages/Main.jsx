import React from "react";

import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  const onClickHandle = () => {
    navigate("/dashboard");
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
