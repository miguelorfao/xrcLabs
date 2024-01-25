import React from "react";

function AddModal() {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary btn-lg my-4"
        data-bs-toggle="modal"
        data-bs-target="#addAdmin"
      >
        Add Admin
      </button>

      <div
        className="modal fade"
        id="addAdmin"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Admin Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <form>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="fname"
                      id="fname"
                      placeholder="Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-danger"></div>
                </form>
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
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddModal;
