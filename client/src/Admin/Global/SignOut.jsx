import axios from "axios";
import React, { Children } from "react";
import { useNavigate } from "react-router-dom";

function SignOut({ className, children, dataBsToggle, signOut }) {
  const navigate = useNavigate();
  const signOutHandler = () => {
    axios
      .get("http://localhost:3001/Logout")
      .then((res) => {
        navigate("/AdminLogin");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button
        type="button"
        className={className}
        data-bs-toggle={dataBsToggle}
        data-bs-target={signOut}
      >
        {children}
      </button>

      <div
        className="modal fade"
        id="signOut"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="container-fluid">
                <h3 className="m-auto text-center">Signing out?</h3>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary w-100"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary w-100"
                onClick={signOutHandler}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignOut;
