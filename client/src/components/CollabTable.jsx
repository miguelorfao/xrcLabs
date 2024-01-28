import axios from "axios";
import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Modal from "./Modal";

function CollabTable() {
  const [collab, setCollab] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:3001/AdminCollabs")
          .then((response) => {
            setCollab(response.data);
          });
      } catch (error) {}
    };
    fetchData();
  }, []);
  const onClickEditHandler = () => {};
  return (
    <div>
      <div className="container">
        <table className="table text-center table-secondary table-responsive table-striped table-hover">
          <thead>
            <tr>
              <th>Date</th>
              <th>Server</th>
              <th>Allocations</th>
              <th>Entries</th>
              <th>Platform</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {collab.map((collabs) => (
              <tr key={collabs.ID} id={collabs.ID}>
                <td>{collabs.Date.slice(0, 10)}</td>
                <td>{collabs.Server}</td>
                <td>{collabs.Allocation}</td>
                <td>{collabs.Entries}</td>
                <td>{collabs.Platform}</td>
                <td className="d-flex">
                  <Buttons
                    label="Edit"
                    btnClass="btn btn-primary border w-50"
                    modal="modal"
                    modalTarget="#editCollab"
                  />
                  <Buttons
                    label="Delete"
                    btnClass="btn btn-danger border w-50"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CollabTable;
