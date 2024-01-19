import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function ProjectsName() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/ProjectsImage");
  };
  return (
    <div>
      {" "}
      <div>
        <div className="container-fluid">
          <div className="register">
            <div className="text-center w-25">
              <div className="m-3">
                <h4>Project Name</h4>
              </div>
              <div className="mb-3">
                <div class="mb-3">
                  <input
                    type="text"
                    class="form-control bg-transparent border-primary"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="d-flex gap-3 mb-3 w-100">
                <Buttons label="Back" btnClass="btn bg-primary w-100" />
                <Buttons
                  label="Continue"
                  btnClass="btn bg-primary w-100"
                  onClick={onClickHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsName;
