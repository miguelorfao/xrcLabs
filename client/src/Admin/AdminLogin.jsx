import React, { useState } from "react";
import Buttons from "./Global/buttons/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admin.css";
function AdminLogin() {
  const navigate = useNavigate();
  const [errorSuccess, setErrorSuccess] = useState("");

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
      axios.post("http://localhost:3001/AdminLogin", adminLogin).then((res) => {
        if (res.data.Status === "Success") {
          setErrorSuccess(res.data.Status);

          setTimeout(function () {
            window.location.replace("/AdminDashboard");
          }, 3000);
        } else {
          setErrorSuccess(res.data.Error);
          window.location.replace("/AdminLogin");
        }
      });
    } catch (err) {}
  };
  const forgottenPasswordHandler = () => {
    navigate("/ForgottenPassword");
  };
  return (
    <div className="hero vh-100">
      <div className="container text-center">
        <div className="row align-items-center admin">
          <div className="col-12 col-md-6">
            <div className="">
              <div className="mb-3">
                <h2>Admin Login</h2>
                <hr />
              </div>
              <form
                onSubmit={onSaveHandler}
                className="bg-dark bg-gradient p-4 rounded-5 shadow"
              >
                {" "}
                <div className="mb-3">
                  <label for="email" className="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="password" className="form-label text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <span className="text-danger mb-3"></span>
                <div className="mb-3">
                  <Buttons
                    type="submit"
                    label="Login as Admin"
                    btnClass="btn btn-outline-primary w-100"
                  />
                </div>
                <hr></hr>
                <div>
                  <Buttons
                    label="Forgotten Password"
                    btnClass="btn btn-outline-primary w-100"
                    onClick={forgottenPasswordHandler}
                  />
                </div>
                <hr></hr>
                <div>
                  <Buttons
                    label="Home Page"
                    btnClass="btn btn-outline-primary w-100"
                    onClick={() => {
                      window.location.replace("/");
                    }}
                  />
                </div>
                {errorSuccess === "Success" ? (
                  <div className="bg-success">{errorSuccess}</div>
                ) : (
                  <div className="bg-danger">{errorSuccess}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
