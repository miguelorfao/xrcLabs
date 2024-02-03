import React, { useState } from "react";

import NavigationBar from "../Global/navigation/NavigationBar";
import axios from "axios";

function AdminCollabs() {
  const [isOpen, setIsOpen] = useState(false);
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
      <NavigationBar>
        {" "}
        <div className="mt-3 text-center">
          <div className="border-bottom border-black mb-4">
            <h2>Collabs</h2>
          </div>
        </div>
      </NavigationBar>
    </div>
  );
}

export default AdminCollabs;
