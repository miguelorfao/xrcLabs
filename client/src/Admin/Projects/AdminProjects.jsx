import React, { useState } from "react";
import NavigationBar from "../Global/NavigationBar";
import Cards from "./Cards";
import Header from "../Global/Header";

function AdminProjects() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Header>
        <i
          class="fa-solid fa-bars fa-2x"
          onClick={() => setIsOpen(!isOpen)}
        ></i>
      </Header>
      <div className="d-flex justify-between w-100">
        <NavigationBar show={isOpen} />
        <div className="w-100">
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default AdminProjects;
