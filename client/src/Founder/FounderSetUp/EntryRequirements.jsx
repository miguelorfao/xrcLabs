import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function EntryRequirements() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/DiscordWinner");
  };
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className="container-fluid">
          <div className="register">
            <div className="text-center w-75">
              <div className="mb-3">
                <h4>Entry Requirements</h4>
              </div>

              <div className="d-flex justify-content-around align-items-center w-100">
                <div>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Requirement Type
                    </label>
                    <select
                      class="form-select form-select-md w-100"
                      name=""
                      id=""
                    >
                      <option selected>Select one</option>
                      <option value="">Boost #project on Platform</option>
                      <option value="">Follow twitter account</option>
                      <option value="">Be followed by twitter account</option>
                      <option value="">Twitter notifications turned on</option>
                      <option value="">Tweet Like</option>
                      <option value="">Tweet retweet</option>
                      <option value="">Quote Tweet</option>
                      <option value="">Join Discord</option>
                      <option value="">Joined Discord before</option>
                      <option value="">Have Discord Role</option>
                      <option value="">Don't already have discord role</option>
                      <option value="">Minimum Sol Ballance</option>
                      <option value="">Raffle Winner</option>
                    </select>
                  </div>
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
                  <p>
                    We Recommend to turn on the following <br /> Follow twitter{" "}
                    <br />
                    Join Discord
                  </p>
                </div>
              </div>

              <div className="d-flex gap-3 mb-3">
                <Buttons
                  label="Continue"
                  btnClass="btn bg-primary w-25"
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

export default EntryRequirements;
