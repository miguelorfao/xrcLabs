import React, { useState } from "react";
import Buttons from "../../components/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();
  const [adminLogin, setAdmin] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (event) => {
    setAdmin((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onSaveHandler = (event) => {
    axios.defaults.withCredentials = true;
    event.preventDefault();
    try {
      axios.post("http://localhost:3001/Admin", adminLogin).then((res) => {
        if (res.data.Status === "Success") {
          navigate("/AdminDashboard");
        } else {
          alert(res.data.Error);
        }
      });
    } catch (err) {}
  };

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
                  onChange={onChangeHandler}
                />
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="password"
                  onChange={onChangeHandler}
                />
              </div>
              <span className="text-danger mb-3"></span>
              <div className="mb-3">
                <Buttons
                  label="Login as Admin"
                  btnClass="btn btn-outline-primary w-100"
                  onClick={onSaveHandler}
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
