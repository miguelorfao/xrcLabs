import React, { useState } from "react";
import NavigationBar from "../Global/navigation/NavigationBar";
import Buttons from "../Global/buttons/Buttons";
import "./AdminProject.css";
function AdminProjects() {
  return (
    <div className="project">
      <NavigationBar>
        <div className="mt-3">
          <div className="border-bottom border-black mb-4 text-center">
            <h2>Projects</h2>
          </div>
          <Buttons
            btnClass="btn w-25 btn-primary mb-3"
            label="Add New Project"
            modal="modal"
            modalTarget="#addProject"
          />
          <div className="project-tables text-center">
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
                  <tr class="shadow ">
                    <td scope="row">First Name</td>
                    <td>Email Address</td>
                    <td>Projects Name</td>
                    <td className="text-success">Completed</td>
                  </tr>
                  <tr class="shadow">
                    <td scope="row">First Name</td>
                    <td>Email Address</td>
                    <td>Projects Name</td>
                    <td className="text-danger">Overdue</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </NavigationBar>
      <div
        class="modal fade"
        id="addProject"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                Add Project
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;
