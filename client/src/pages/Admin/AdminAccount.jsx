import React, { useEffect, useState } from "react";
import NavigationBar from "../../components/NavigationBar";
import Buttons from "../../components/Buttons";
import Modal from "../../components/Modal";
import axios from "axios";

function AdminAccount() {
  const [adminUser, setAdminUser] = useState([]);
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
        if (res.data === "success") {
          window.location.reload();
        } else {
          alert("Seems we have an error please try again!");
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
        .then(() => {
          console.log("success");
          window.location.reload();
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavigationBar />

      <div className="container-fluid my-5 w-50">
        <ul class="list-group list-group-flush mb-4">
          <Buttons
            label="Add Admin"
            btnClass="btn btn-primary"
            modal="modal"
            modalTarget="#addAdmin"
          />
        </ul>
        <div>
          <ul className="list-group list-group-flush">
            {adminUser.map((userData) => (
              <li
                key={userData.ID}
                className="list-group-item d-flex align-items-center justify-content-between mb-3"
              >
                <div className="d-flex gap-4">
                  <span>{userData.Name}</span>
                  <span>{userData.Email}</span>
                </div>
                <span className="d-flex w-25 gap-3">
                  <Buttons
                    btnClass="btn btn-primary w-100"
                    label="Edit"
                    modal="modal"
                    modalTarget="#editAdmin"
                    onClick={() => {
                      onclickHandler(userData.ID);
                    }}
                  />
                  <Buttons
                    btnClass="btn btn-danger w-100"
                    label="Delete"
                    onClick={() => {
                      deleteHandler(userData.ID);
                    }}
                  />
                </span>
              </li>
            ))}
          </ul>
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
        <form method="POST" onSubmit={onSaveHandler}>
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
