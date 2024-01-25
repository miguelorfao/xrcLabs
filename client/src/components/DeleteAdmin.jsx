import React from "react";

function DeleteAdmin({ onClick }) {
  return (
    <div>
      <p
        type="button"
        className="text-danger"
        data-bs-toggle="modal"
        data-bs-target="#DelAdmin"
      >
        Delete Admin
      </p>

      <div
        className="modal fade"
        id="DelAdmin"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <h4 className="m-auto text-center">
                  Are you Sure you want to delete?
                </h4>
              </div>
            </div>
            <hr />
            <div className="w-100 d-flex justify-content-between gap-3 p-3">
              <button
                type="button"
                className="btn btn-secondary w-50"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary w-50"
                onClick={onClick}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteAdmin;
