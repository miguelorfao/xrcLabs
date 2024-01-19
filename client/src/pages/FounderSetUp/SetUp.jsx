import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function SetUp() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/ProjectsName");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="register">
          <div className="text-center">
            <div className="m-3">
              <h4>Welcome to Platform name</h4>
            </div>
            <div>
              <p>Lets make you NFT Project</p>
            </div>
            <div className="d-flex gap-3 mb-3">
              <Buttons label="Back" btnClass="btn bg-primary w-100" />
              <Buttons
                label="Continue"
                btnClass="btn bg-primary w-100"
                onClick={onClickHandler}
              />
            </div>
            <div>
              <p>Before pressing skip make sure you have contacted our staff</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetUp;
