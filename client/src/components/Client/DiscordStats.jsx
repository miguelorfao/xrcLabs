import React, { useState } from "react";

// import Buttons from "../../components/Buttons";

// import { useNavigate } from "react-router-dom";
import SideNav from "../SideNav";
import Header from "../Header";

function DiscordStat() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header>
        <i
          class="fa-solid fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </Header>
      <SideNav show={isOpen} />
      <div
        className="modal fade"
        id="projectSetting"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-sm modal-fullscreen" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Project Setting
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row justify-content-center align-items-center g-2 mt-5">
                  <ul
                    className="nav row  mb-3  w-100"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li
                      className="col nav-item w-100 btn-outline-primary"
                      role="presentation"
                    >
                      <button
                        className="nav-link active w-100 btn"
                        id="pills-atlas-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-atlas"
                        type="button"
                        role="tab"
                        aria-controls="pills-atlas"
                        aria-selected="true"
                      >
                        Atlas
                      </button>
                    </li>
                    <li
                      className="col nav-item w-100 btn-outline-primary"
                      role="presentation"
                    >
                      <button
                        className="nav-link btn  w-100"
                        id="pills-subber-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-subber"
                        type="button"
                        role="tab"
                        aria-controls="pills-subber"
                        aria-selected="false"
                      >
                        Subber
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="pills-atlas"
                      role="tabpanel"
                      aria-labelledby="pills-atlas-tab"
                    >
                      <div className="col">
                        <form>
                          <div className="card border-primary">
                            <div className="row p-2 align-items-center">
                              <div className="col-12 col-md-3">
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="projectName"
                                    id="projectName"
                                    placeholder="projectName"
                                  />
                                  <label for="projectName">Project Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="wlSpot"
                                    id="wlSpot"
                                    placeholder="wlSpot"
                                  />
                                  <label for="wlSpot">WL Spot</label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    id="price"
                                    placeholder="price"
                                  />
                                  <label for="price">Price</label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    id="date"
                                    placeholder="Date"
                                  />
                                  <label for="date">Date</label>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label for="template" className="form-label">
                                    Template
                                  </label>
                                  <textarea
                                    className="form-control"
                                    name="template"
                                    id="template"
                                    rows="20"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-12 col-md-3">
                                <div className="mb-3">
                                  <label
                                    for="uploadeImg"
                                    className="form-label"
                                  >
                                    Upload Image
                                  </label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    id="uploadeImg"
                                  ></input>
                                </div>
                                <div className="mb-3">
                                  <div className="card">
                                    <img
                                      className="card-img-top img-fluid"
                                      src="../public/avatar.jpeg"
                                      alt="Title"
                                    ></img>
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Discord
                                </button>
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Twitter
                                </button>
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Projects
                                </button>
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Contact
                                </button>
                              </div>
                            </div>
                            <div className="p-3">
                              <button
                                type="button"
                                className="btn btn-outline-primary w-100"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="pills-subber"
                      role="tabpanel"
                      aria-labelledby="pills-subber-tab"
                    >
                      <div className="col">
                        <form>
                          <div className="card border-primary">
                            <div className="row p-2 align-items-center">
                              <div className="col-12 col-md-3">
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="projectName"
                                    id="projectName"
                                    placeholder="projectName"
                                  ></input>
                                  <label for="projectName">Project Name</label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="wlSpot"
                                    id="wlSpot"
                                    placeholder="wlSpot"
                                  ></input>
                                  <label for="wlSpot">WL Spot</label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="price"
                                    id="price"
                                    placeholder="price"
                                  />
                                  <label for="price">Price</label>
                                </div>
                                <div className="form-floating mb-3">
                                  <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    id="date"
                                    placeholder="Date"
                                  />
                                  <label for="date">Date</label>
                                </div>
                              </div>
                              <div className="col">
                                <div className="mb-3">
                                  <label for="template" className="form-label">
                                    Template
                                  </label>
                                  <textarea
                                    className="form-control"
                                    name="template"
                                    id="template"
                                    rows="20"
                                  ></textarea>
                                </div>
                              </div>
                              <div className="col-12 col-md-3">
                                <div className="mb-3">
                                  <label
                                    for="uploadeImg"
                                    className="form-label"
                                  >
                                    Upload Image
                                  </label>
                                  <input
                                    className="form-control"
                                    type="file"
                                    id="uploadeImg"
                                  />
                                </div>
                                <div className="mb-3">
                                  <div className="card">
                                    <img
                                      className="card-img-top img-fluid"
                                      src="../public/avatar.jpeg"
                                      alt="Title"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col">
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Discord
                                </button>
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Twitter
                                </button>
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Projects
                                </button>
                                <button className="btn btn-outline-primary w-100 mb-3">
                                  Contact
                                </button>
                              </div>
                            </div>
                            <div className="p-3">
                              <button
                                type="button"
                                className="btn btn-outline-primary w-100"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscordStat;
