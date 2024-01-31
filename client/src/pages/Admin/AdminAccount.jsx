import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Buttons from "../../components/Buttons";
import Modal from "../../components/Modal";
import axios from "axios";

function AdminAccount() {
  const [adminUser, setAdminUser] = useState([]);
  const [errorSuccess, setErrorSuccess] = useState("");

  const [editAdminUser, setEditAdminUser] = useState([
    { name: "", email: "", password: "" },
  ]);
  const [editAdminUserID, setEditAdminUserID] = useState("");

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    password: "",
  });
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        await axios.get("http://localhost:3001/AdminAccount").then((res) => {
          setAdminUser(res.data);
        });
      } catch (error) {}
    };
    fetchAdmin();
  }, []);

  const onChangeHandler = (event) => {
    setAdmin((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const onSaveHandler = (event) => {
    event.preventDefault();
    try {
      axios.post("http://localhost:3001/AdminAccount", admin).then((res) => {
        console.log(res.data);
        if (res.data.Status === "Employee added Successfully") {
          setErrorSuccess(res.data.Status);
          setTimeout(function () {
            window.location.reload("");
          }, 3000);
        } else {
          setErrorSuccess(res.data.Error);
        }
      });
    } catch (error) {}
  };
  const onChangeEditHandler = (event) => {
    setEditAdminUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const onclickHandler = (id) => {
    setEditAdminUserID(id);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .put(
          "http://localhost:3001/AdminAccount/" + editAdminUserID,
          editAdminUser
        )
        .then(() => {
          // window.location.reload();
          console.log("success");
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteHandler = async (id) => {
    console.log(id);
    try {
      await axios
        .delete("http://localhost:3001/AdminAccount/" + id)
        .then((res) => {
          if (res.data.Status === "Success") {
            setErrorSuccess(res.data.Status);

            setTimeout(function () {
              window.location.replace("/AdminAccount");
            }, 5000);
          } else {
            setErrorSuccess(res.data.Error);
            window.location.replace("/AdminAccount");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavigationBar />

      <div className="container my-5">
        <ul class="list-group list-group-flush mb-4 p-2">
          {errorSuccess === "Employee added Successfully" ||
          errorSuccess === "Success" ? (
            <div className="bg-success">{errorSuccess}</div>
          ) : (
            <div className="bg-danger">{errorSuccess}</div>
          )}
          <Buttons
            label="Add Admin"
            btnClass="btn btn-primary"
            modal="modal"
            modalTarget="#addAdmin"
          />
        </ul>
        <hr />
        <div>
          <div className="container adminAccount">
            <ul className="list-group list-group-flush">
              {adminUser.map((userData) => (
                <div className="col-12" key={userData.ID}>
                  <li className="list-group-item d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex gap-2 md-gap-4">
                      <span>{userData.Name}</span>
                      <span>{userData.Email}</span>
                    </div>
                    <div className="d-flex gap-3">
                      <Buttons
                        btnClass="btn btn-primary "
                        label="Edit"
                        modal="modal"
                        modalTarget="#editAdmin"
                        onClick={() => {
                          onclickHandler(userData.ID);
                        }}
                      />
                      <Buttons
                        btnClass="btn btn-danger"
                        label="Delete"
                        onClick={() => {
                          deleteHandler(userData.ID);
                        }}
                      />
                    </div>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Modal
        modal_className="modal fade"
        id="addAdmin"
        tabindex="-1"
        role="dialog"
        modalTitleID="modalTitleId"
        hidden="true"
        title="Add Admin"
      >
        <form onSubmit={onSaveHandler}>
          <div class="mb-3">
            <label for="" class="form-label">
              Admin Name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="name"
              placeholder="Admin Name"
              onChange={onChangeHandler}
              required
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
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
            <label for="" class="form-label">
              Password
            </label>
            <input
              title="Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one underscore but no other special character, no space and it must be 8-16 characters long."
              pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,16}"
              type="text"
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
            label="Save and Next"
            type="submit"
          />
        </form>

        <hr />
      </Modal>
      <Modal
        modal_className="modal fade"
        id="editAdmin"
        tabindex="-1"
        role="dialog"
        modalTitleID="modalTitleId"
        hidden="true"
        title="Edit Admin"
      >
        <form>
          <div class="mb-3">
            <label for="" class="form-label">
              Admin Name
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              id="editName"
              placeholder="Admin Name"
              onChange={onChangeEditHandler}
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="editEmail"
              placeholder="Admin Email"
              onChange={onChangeEditHandler}
            />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Password
            </label>
            <input
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              type="password"
              class="form-control"
              name="password"
              id="editPassword"
              placeholder="Admin Password"
              onChange={onChangeEditHandler}
            />
          </div>

          <div className="text-danger"></div>
        </form>
        <Buttons
          btnClass="btn btn-primary w-100"
          onClick={onSubmitHandler}
          label="Save and Next"
          type="submit"
        />
        <hr />
      </Modal>
    </div>
  );
}

export default AdminAccount;
