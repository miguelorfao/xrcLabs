import React from "react";
import Buttons from "../../components/Buttons";

function AdminLogin() {
  return (
    <div>
      <div className="container text-center">
        <div className="row align-items-center adminForm">
          <div className="col-12 col-md-6">
            <div className="shadows rounded-3 p-2">
              <div className="mb-3">
                <h4>Admin Login</h4>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="password"
                />
              </div>
              <span className="text-danger mb-3"></span>
              <div className="mb-3">
                <Buttons
                  label="Login as Admin"
                  btnClass="btn btn-outline-primary w-100"
                />
              </div>
              <hr></hr>
              <div>
                <Buttons
                  label="Forgotten Password"
                  btnClass="btn btn-outline-primary w-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
