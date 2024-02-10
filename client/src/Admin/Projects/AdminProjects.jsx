import React, { useState } from "react";
import NavigationBar from "../Global/navigation/NavigationBar";
import "./AdminProject.css";
function AdminProjects() {
  return (
    <div>
      <NavigationBar>
        <div className="mt-3 text-center">
          <div className="border-bottom border-black mb-4">
            <h2>Projects</h2>
          </div>
          <div className="project-tables">
            <div className="row justify-around">
              <div className="col-12 col-md-7 shadow rounded-3">
                <div class="w-100">
                  <ul>
                    <li className="flex justify-between border-bottom border-black">
                      <span>text</span>
                      <span>text</span>
                      <span>complete</span>
                    </li>
                  </ul>
                  <ul>
                    <li className="flex justify-between align-middle border border-black bg-white rounded-3">
                      <span className=" w-100">text</span>
                      <span className=" w-100">text</span>
                      <span className="bg-success rounded-pill w-100">
                        complete
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4 shadow">
                <div className="my-2 border-bottom border-black">
                  <h4>Add Project</h4>
                </div>
                <div>
                  <form class="d-flex flex-column">
                    <div class="col-12">
                      <div class="mb-3">
                        <label for="" class="form-label">
                          Inline Form
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                        />
                        <small id="helpId" class="text-muted">
                          Help text
                        </small>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-3">
                        <label for="" class="form-label">
                          Inline Form
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                        />
                        <small id="helpId" class="text-muted">
                          Help text
                        </small>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-3">
                        <label for="" class="form-label">
                          Inline Form
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                        />
                        <small id="helpId" class="text-muted">
                          Help text
                        </small>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-3">
                        <label for="" class="form-label">
                          Inline Form
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                        />
                        <small id="helpId" class="text-muted">
                          Help text
                        </small>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="mb-3">
                        <label for="" class="form-label">
                          Inline Form
                        </label>
                        <input
                          type="text"
                          name=""
                          id=""
                          class="form-control"
                          placeholder=""
                          aria-describedby="helpId"
                        />
                        <small id="helpId" class="text-muted">
                          Help text
                        </small>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <button className="project-btn rounded-4">
                        Save Project
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavigationBar>
    </div>
  );
}

export default AdminProjects;
