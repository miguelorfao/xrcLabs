import React, { useEffect, useState } from "react";
import NavigationBar from "../Global/navigation/NavigationBar";
import Buttons from "../Global/buttons/Buttons";
import Modal from "../Global/modal/Modal";
import axios from "axios";
import "./AdminAccount.css";

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
      {" "}
      <NavigationBar>
        <div className="mt-3 text-center admin-accounts">
          <div className="border-bottom border-black mb-4">
            <h2>Admin Accounts</h2>
          </div>
          <ul class="list-group list-group-flush mb-4">
            {errorSuccess === "Employee added Successfully" ||
            errorSuccess === "Success" ? (
              <div className="bg-success">{errorSuccess}</div>
            ) : (
              <div className="bg-danger">{errorSuccess}</div>
            )}
            <button
              type="button"
              class="btn btn-primary w-28"
              data-bs-toggle="modal"
              data-bs-target="#addAdmin"
            >
              Add Admin
            </button>
          </ul>
          <hr />
          <div>
            <div className="adminAccount">
              <div class="table-responsive ">
                <table class="table table-hover table-borderless align-middle text-center">
                  <thead className="border-bottom">
                    <tr className="border-bottom">
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody class="table-group-divider">
                    {adminUser.map((userData) => (
                      <tr
                        class="border-bottom shadow-bottom spacing shadow"
                        key={userData.ID}
                      >
                        <td>
                          {" "}
                          <span>{userData.Name}</span>
                        </td>
                        <td>
                          {" "}
                          <span>{userData.Email}</span>
                        </td>
                        <td>
                          {" "}
                          <div className="d-flex gap-3">
                            <Buttons
                              btnClass="btn w-100 btn-primary"
                              label="Edit"
                              modal="modal"
                              modalTarget="#editAdmin"
                              onClick={() => {
                                onclickHandler(userData.ID);
                              }}
                            />
                            <Buttons
                              btnClass="btn w-100 btn-danger"
                              label="Delete"
                              onClick={() => {
                                deleteHandler(userData.ID);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot></tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </NavigationBar>
      <div
        class="modal fade"
        id="addAdmin"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-dialog-centered "
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                Add Admin
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="addAdmin"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAccount;
