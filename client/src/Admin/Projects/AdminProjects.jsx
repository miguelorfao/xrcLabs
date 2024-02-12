import React, { useState } from "react";
import NavigationBar from "../Global/navigation/NavigationBar";
import "./AdminProject.css";
function AdminProjects() {
  return (
    <div className="project">
      <NavigationBar>
        <div className="mt-3 text-center container">
          <div className="border-bottom border-black mb-4">
            <h2>Projects</h2>
          </div>
          <div className="project-tables">
            <div className="row justify-around">
              <div className="col-12 col-md-7 shadow rounded-3">
                <div class="table-responsive w-100">
                  <table class="table list">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Project</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="shadow rounded-5">
                        <td scope="row">First Name</td>
                        <td>Email Address</td>
                        <td>Projects Name</td>
                        <td className="text-success">Completed</td>
                      </tr>
                      <tr class="shadow rounded-5">
                        <td scope="row">First Name</td>
                        <td>Email Address</td>
                        <td>Projects Name</td>
                        <td className="text-danger">Overdue</td>
                      </tr>
                    </tbody>
                  </table>
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
