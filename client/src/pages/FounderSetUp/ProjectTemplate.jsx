import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function ProjectTemplate() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/MintDetails");
  };

  return (
    <div>
      {" "}
      <div className="container-fluid">
        <div className="register">
          <div className="text-center">
            <div className="mb-3">
              <h4>Now for the Templates</h4>
              <p>Atlas & Subber description Template</p>
            </div>

            <div className="mb-3">
              <div class="mb-3">
                <textarea
                  rows="20"
                  cols="50"
                  type="text"
                  class="form-control bg-transparent border-primary text-white"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <p>No Template</p>
              <p>Request one by contacting one of our staff</p>
              <p>@reefli @notzayne</p>
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

export default ProjectTemplate;
