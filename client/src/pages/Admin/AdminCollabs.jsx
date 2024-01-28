import React, { useState } from "react";
import Buttons from "../../components/Buttons";
import NavigationBar from "../../components/NavigationBar";
import Modal from "../../components/Modal";
import axios from "axios";
import CollabTable from "../../components/CollabTable";

function AdminCollabs() {
  const [collabEntires, setCollabEntires] = useState({
    date: "",
    server: "",
    allocation: "",
    entries: "",
    platform: "",
  });
  const onSaveHandler = async (event) => {
    try {
      await axios
        .post("http://localhost:3001/AdminCollabs", collabEntires)
        .then(() => {
          window.location.reload();
        });
    } catch (error) {}
    setCollabEntires(() => [
      {
        date: "",
        server: "",
        allocation: "",
        entries: "",
        platform: "",
      },
    ]);
  };
  const onChangeHandler = (event) => {
    setCollabEntires((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div>
      <NavigationBar />
      <div className="container-fluid">
        <div className="row justify-content-around my-4">
          <div className="col col-md-2">
            {" "}
            <Buttons
              btnClass="btn btn-outline-info"
              label="Add Entry"
              modal="modal"
              modalTarget="#addCollab"
            />
          </div>
          <div className="col col-md-2">
            {" "}
            <Buttons btnClass="btn btn-outline-info" label="Upload Excel" />
          </div>
          <div className="col col-md-2">
            {" "}
            <Buttons btnClass="btn btn-outline-info" label="Download Excel" />
          </div>
          <div className="col col-md-2">
            {" "}
            <Buttons btnClass="btn btn-outline-info" label="Refresh Table" />
          </div>
        </div>
      </div>
      <CollabTable />
      <div className="px-2">
        <Modal
          modal_className="modal fade"
          id="addCollab"
          tabindex="-1"
          role="dialog"
          modalTitleID="modalTitleId"
          hidden="true"
          title="Add Collabs"
        >
          <form>
            <div class="mb-3">
              <label for="" class="form-label">
                Date
              </label>
              <input
                type="date"
                class="form-control"
                name="date"
                id="date"
                placeholder="Date"
                onChange={onChangeHandler}
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">
                Server
              </label>
              <input
                type="text"
                class="form-control"
                name="server"
                id="server"
                placeholder="Server"
                onChange={onChangeHandler}
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">
                Allocation
              </label>
              <input
                type="text"
                class="form-control"
                name="allocation"
                id="allocation"
                placeholder="Allocation"
                onChange={onChangeHandler}
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">
                Entries
              </label>
              <input
                type="text"
                class="form-control"
                name="entries"
                id="entries"
                placeholder="Entries"
                onChange={onChangeHandler}
              />
            </div>
            <div class="mb-3">
              <label for="" class="form-label">
                Platform
              </label>
              <input
                type="text"
                class="form-control"
                name="platform"
                id="platform"
                placeholder="Platform"
                onChange={onChangeHandler}
              />
            </div>

            <div className="text-danger"></div>
          </form>
          <Buttons
            btnClass="btn btn-primary w-100"
            onClick={onSaveHandler}
            label="Save and Next"
            type="submit"
          />
          <hr />
        </Modal>
      </div>
    </div>
  );
}

export default AdminCollabs;
