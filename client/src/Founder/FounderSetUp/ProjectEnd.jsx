import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function ProjectEnd() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/Dashboard");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="register">
          <div className="text-center">
            <div className="mb-4">
              <h3>
                Thank you for filling out the form <br /> We will get started on
                creating your Subber and Atlas profile soon!
              </h3>
            </div>
            <div className="d-flex gap-3 mt-3">
              <Buttons
                label="Take me to the dashboard"
                btnClass="btn bg-primary w-100"
                onClick={onClickHandler}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEnd;
