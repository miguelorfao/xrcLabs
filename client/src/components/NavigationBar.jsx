import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-5  mb-2 mb-lg-0 w-100 d-flex justify-content-end gap-3">
              <li className="nav-item">
                <Link to="/AdminDashboard" className="text-info">
                  {" "}
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AdminProjects" className="text-info">
                  {" "}
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AdminCollabs" className="text-info">
                  Collabs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/AdminAccount" className="text-info">
                  Admin Account
                </Link>
              </li>

              <li
                className="nav-item btn btn-outline-info"
                data-bs-toggle="modal"
                data-bs-target="#signOut"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
