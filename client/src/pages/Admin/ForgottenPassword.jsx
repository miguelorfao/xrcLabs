import React, { useState } from "react";
import Buttons from "../../components/Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgottenPassword() {
  const navigate = useNavigate();
  const [getEmail, setGetEmail] = useState({
    password: "",
    email: "",
  });

  const onSubmitHandler = async (event) => {
    const id = getEmail.email;

    await axios
      .put("http://localhost:3001/ForgottenPassword/" + id, getEmail)
      .then((res) => {
        console.log(res.data.Status);

        navigate("/Admin");
      });
  };

  const emailHandler = (event) => {
    setGetEmail((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      {" "}
      {}
      <div className="container text-center">
        <div className="row align-items-center adminForm">
          <div className="col-12 col-md-6">
            <form
              onSubmit={() => {
                onSubmitHandler(getEmail.email);
              }}
            >
              <div className="shadows rounded-3 p-2">
                <div className="mb-3">
                  <h4>Forgotten Password</h4>
                </div>{" "}
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
                    onChange={emailHandler}
                    required
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
                    onChange={emailHandler}
                    required
                  />{" "}
                </div>
                <div className="mb-3">
                  <Buttons
                    type="submit"
                    id="saveEmail"
                    label="Save"
                    btnClass="btn btn-outline-primary w-100"
                  />
                </div>
                <hr></hr>
                <Buttons
                  label="Return To Login"
                  btnClass="btn btn-outline-primary w-100"
                  onClick={() => {
                    navigate("/Admin");
                  }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgottenPassword;
