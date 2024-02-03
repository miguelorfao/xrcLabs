import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function DiscordWinner() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/ProjectEnd");
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="register">
          <div className="text-center w-25">
            <div>
              <div className="m-5">
                <h4>Last one</h4>
              </div>

              <div class="form-check mb-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id=""
                  checked
                />
                <label class="form-check-label" for="">
                  Assign discord roll to winners
                </label>
              </div>

              <div class="mb-5">
                <input
                  type="text"
                  class="form-control bg-transparent border-primary text-white"
                  name=""
                  id=""
                  aria-describedby="helpId"
                  placeholder=""
                />
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

export default DiscordWinner;
