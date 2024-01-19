import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function ProjectSocials() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/ProjectsTemplate");
  };
  return (
    <div>
      {" "}
      <div className="container-fluid">
        <div className="register">
          <div className="text-center mb-3">
            <div>
              <h4>Let's get to socials</h4>
              <p>
                If your socials are not yet set up don't worry. <br />
                You can edit these later.
              </p>
            </div>
            <div className="d-flex gap-3 text-center">
              <div>
                <div className="m-3">
                  <h5>Discord</h5>
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
              </div>
              <div>
                <div className="m-3">
                  <h5>Twitter / X</h5>
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
              </div>
              <div>
                <div className="m-3">
                  <h5>Gitbook</h5>
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
              </div>
              <div>
                <div className="m-3">
                  <h5>Project Website</h5>
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

export default ProjectSocials;
