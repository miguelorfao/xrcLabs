import React, { useState } from "react";
import Buttons from "../components/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgottenPassword() {
  const navigate = useNavigate();
  const [errorSucess, setErrorSucess] = useState("");
  const [getEmail, setGetEmail] = useState({
    password: "",
    email: "",
  });

  const alertError = document.querySelector(".error");
  const alertSuccess = document.querySelector(".success");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const id = getEmail.email;
    console.log(id);
    try {
      await axios
        .put("http://localhost:3001/ForgottenPassword/" + id, getEmail)
        .then((res) => {
          console.log(res.data.Status);
          if (res.data.Status === "Success") {
            setErrorSucess(res.data.Status);

            setTimeout(function () {
              alertSuccess.style.display = "block";
            }, 1000);
            setTimeout(function () {
              window.location.replace("/AdminLogin");
            }, 5000);
          } else {
            alert(res.data.Error);
            navigate("/ForgottenPassword");
            setErrorSucess(res.data.Status);
            alertError.style.display = "block";
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onChangeHandler = (event) => {
    setGetEmail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      {" "}
      {}
      <div className="hero vh-100">
        <div className="container text-center">
          <div className="row align-items-center admin">
            <div className="col-12 col-md-6">
              <div className="col">
                {errorSucess === "Success" ? (
                  <div class="alert success mb-3" role="alert">
                    Password Successfully changed, please wait while we redirect
                    you
                  </div>
                ) : (
                  <div class="alert error  mb-3" role="alert">
                    Oops looks like we have an error, try again or let our team
                    know.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <h2>Forgotten Password</h2>
                <hr />
              </div>
              <form
                onSubmit={onSubmitHandler}
                className="bg-dark bg-gradient p-3 shadows rounded-3"
              >
                <div class="mb-3">
                  <label for="" class="form-label text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="Admin Email"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="" class="form-label text-white">
                    Password
                  </label>
                  <input
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="Admin Password"
                    onChange={onChangeHandler}
                    required
                  />
                </div>
                <div className="text-danger"></div>
                <Buttons
                  btnClass="btn btn-primary w-100"
                  label="Save"
                  type="submit"
                />
                <hr />
                <Buttons
                  btnClass="btn btn-primary w-100"
                  label="Back to login"
                  type="button"
                  onClick={() => {
                    navigate("/AdminLogin");
                  }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;
