import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SignOut from "./SignOut";

function NavigationBar() {
  return (
    <div>
      <nav className="bg-dark ">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex m-2 text-end justify-end">
              <Link
                to="/AdminDashboard"
                className="text-info btn d-none d-md-block"
              >
                Dashboard
              </Link>
              <Link
                to="/AdminProjects"
                className="text-info btn d-none d-md-block"
              >
                Projects
              </Link>
              <Link
                to="/AdminCollabs"
                className="text-info btn d-none d-md-block"
              >
                Collabs
              </Link>

              <Link
                to="/AdminAccount"
                className="text-info btn d-none d-md-block"
              >
                Admin Account
              </Link>

              <SignOut
                className="btn btn-primary d-none d-md-block"
                dataBsToggle="modal"
                signOut="#signOut"
              >
                Sign Out
              </SignOut>
            </div>
          </div>
        </div>
      </nav>
      <div className="d-flex align-items-center shadows w-100 py-3 justify-evenly position-fixed bottom-0 bg-dark d-md-none">
        <Link to="/AdminDashboard" className="text-info btn">
          <i class="fa-solid fa-house text-primary"></i>
        </Link>
        <Link to="/AdminProjects" className="text-info btn">
          <i class="fa-solid fa-list-check text-primary"></i>
        </Link>
        <Link to="/AdminCollabs" className="text-info btn">
          <i class="fa-solid fa-user text-primary"></i>
        </Link>
        <Link to="/AdminAccount" className="text-info btn">
          <i class="fa-solid fa-file-invoice text-primary"></i>
        </Link>
        <SignOut
          className="btn btn-primary"
          dataBsToggle="modal"
          signOut="#signOut"
        >
          <i className="fa-solid fa-power-off"></i>
        </SignOut>
      </div>
    </div>
  );
}

export default NavigationBar;
