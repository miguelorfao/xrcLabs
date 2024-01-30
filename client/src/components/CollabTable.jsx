import axios from "axios";
import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Modal from "./Modal";

function CollabTable() {
  const [collab, setCollab] = useState([]);
  const [editTable, setEditTable] = useState({});
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
  const onTodoChange = (event) => {
    setEditTable((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(editTable);
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
            </tr>
          </thead>
          <tbody>
            {collab.map((collabs) => (
              <tr key={collabs.ID} id={collabs.ID}>
                <td>
                  {" "}
                  <input
                    className="text-black bg-transparent"
                    type="date"
                    name="date"
                    value={collabs.Date.slice(0, 10)}
                    onChange={onTodoChange}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="text-black bg-transparent"
                    type="text"
                    value={collabs.Server}
                    name="server"
                    onChange={onTodoChange}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="text-black bg-transparent"
                    type="text"
                    name="allocation"
                    value={collabs.Allocation}
                    onChange={onTodoChange}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="text-black bg-transparent"
                    type="text"
                    name="entries"
                    value={collabs.Entries}
                    onChange={onTodoChange}
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="text-black bg-transparent"
                    type="text"
                    name="platform"
                    value={collabs.Platform}
                    onChange={onTodoChange}
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
