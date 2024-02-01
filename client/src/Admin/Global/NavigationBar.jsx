import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignOut from ".//SignOut";
import "../admin.css";
function NavigationBar({ show }) {
  return (
    <div>
      <div className={show ? "Adminsidenav active" : "Adminsidenav"}>
        <div className="w-100 pt-4">
          <ul className="w-100">
            <li className="border-bottom mb-4 w-100">
              <Link to="/AdminDashboard">Dashboard</Link>
            </li>
            <li className="border-bottom mb-4 w-100">
              <Link to="/AdminProjects">Projects</Link>
            </li>
            <li className="border-bottom mb-4 w-100">
              <Link to="/AdminCollabs">Collabs</Link>
            </li>

            <li class="nav-item dropdown  border-bottom w-100">
              <Link
                class="dropdown-toggle0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Settings
              </Link>
              <ul class="dropdown-menu w-100 mt-2 text-start px-2">
                <li>
                  <Link to="/AdminAccount" class="" href="#">
                    Admin Account
                  </Link>
                </li>
                <li>
                  <Link class="" href="#">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
              </ul>
            </li>
          </ul>
          <SignOut
            className="btn btn-primary  position-fixed bottom-0 signOut mb-3"
            dataBsToggle="modal"
            signOut="#signOut"
          >
            Sign Out
          </SignOut>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
