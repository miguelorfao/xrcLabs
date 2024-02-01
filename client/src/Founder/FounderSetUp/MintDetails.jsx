import React from "react";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

function MintDetails() {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("/EntryRequirements");
  };
  return (
    <div>
      {" "}
      <div className="container-fluid">
        <div className="register">
          <div className="text-center">
            <div className="mb-3">
              <h4>Mint Details</h4>
              <p>Leave empty for TBA</p>
            </div>
            <div>
              <p>Project Blockchain</p>
            </div>
            <div className="mb-3">
              <div class="mb-3">
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
              <div>
                <div>
                  <div>
                    <p>Mint Supply</p>
                  </div>
                  <div className="mb-3">
                    <div class="mb-3">
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
                </div>{" "}
                <div>
                  <div>
                    <p>Public Mint Date</p>
                  </div>
                  <div className="mb-3">
                    <div class="mb-3">
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
                </div>{" "}
                <div>
                  <div>
                    <p>WhiteList Mint Date</p>
                  </div>
                  <div className="mb-3">
                    <div class="mb-3">
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
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <p>Mint Price</p>
                  </div>
                  <div className="mb-3">
                    <div class="mb-3">
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
                </div>{" "}
                <div>
                  <div>
                    <p>Public Mint Time (UTC)</p>
                  </div>
                  <div className="mb-3">
                    <div class="mb-3">
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
                </div>{" "}
                <div>
                  <div>
                    <p>Whitelist Mint Time (UTC)</p>
                  </div>
                  <div className="mb-3">
                    <div class="mb-3">
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

export default MintDetails;
