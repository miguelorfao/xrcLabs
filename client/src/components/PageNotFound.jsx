import React from "react";
import Buttons from "./Buttons";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="hero main">
      <div className="text-center">
        <h1 className="mb-5">Page Not Found or soon to be?</h1>
        <Buttons
          btnClass="btn btn-primary mt-5"
          label="Go Back Home"
          onClick={() => {
            window.location.replace("/");
          }}
        />
      </div>
    </div>
  );
}

export default PageNotFound;
