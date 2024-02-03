import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function ProjectsImage() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/ProjectsSocials");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="register">
          <div className="text-center">
            <div>
              <div className="m-3">
                <h4>Upload Image</h4>
              </div>
              <div className="mb-3">
                <div class="mb-3">
                  <input
                    type="file"
                    class="form-control bg-transparent border-primary text-white"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="m-3">
                <h4>Upload Cover Photo</h4>
              </div>
              <div className="mb-3">
                <div class="mb-3">
                  <input
                    type="file"
                    class="form-control bg-transparent border-primary text-white"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
            <div className="d-flex gap-3 mb-3">
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
  );
}

export default ProjectsImage;
