import React, { useState } from "react";
import NavigationBar from "../Global/navigation/NavigationBar";

function AdminProjects() {
  return (
    <div>
      <NavigationBar>
        <div className="mt-3 text-center">
          <div className="border-bottom border-black mb-4">
            <h2>Projects</h2>
          </div>
          <ul class="list-group list-group-flush p-3">
            <li class="list-group-item mb-1">
              <div className="d-flex justify-between">
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
              </div>
            </li>
            <li class="list-group-item mb-1 shadow">
              <div className="d-flex justify-between">
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
              </div>
            </li>
            <li class="list-group-item mb-1 shadow">
              <div className="d-flex justify-between">
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
                <p>Name</p>
              </div>
            </li>
          </ul>
        </div>
      </NavigationBar>
    </div>
  );
}

export default AdminProjects;
