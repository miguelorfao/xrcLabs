import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import MenuIcon from "@mui/icons-material/Menu";
import "./navigationBar.css";

import axios from "axios";
function NavigationBar({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const signOutHandler = () => {
    axios
      .get("http://localhost:3001/Logout")
      .then((res) => {
        navigate("/AdminLogin");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="admin-navigation w-100">
      <div
        className="d-flex"
        style={{ display: "flex", height: "100%", minHeight: "100vh" }}
      >
        <Sidebar collapsed={collapsed} collapsedWidth="0px">
          <Menu>
            <MenuItem>
              {" "}
              <Link to="/AdminDashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="/AdminProjects">Projects</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="/AdminCollabs">Collabs</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="/AdminCalendar">Calendar</Link>
            </MenuItem>
            <MenuItem>
              {" "}
              <Link to="/AdminAccount">Admin Accounts</Link>
            </MenuItem>{" "}
            <SubMenu label="Settings">
              <MenuItem>Profile</MenuItem>
              <hr />
              <MenuItem>
                <button
                  className="position-relative bottom-0"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#signOut"
                >
                  Sign Out
                </button>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>

        <div className="className" style={{ height: "100%", minHeight: "5vh" }}>
          <MenuIcon onClick={() => setCollapsed(!collapsed)} />
        </div>

        <div className="w-100">
          <div className="w-100 className">{children}</div>
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="signOut"
          tabindex="-1"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="container-fluid">
                  <h3 className="m-auto text-center">Signing out?</h3>
                </div>
              </div>
              <hr />
              <div className="d-flex gap-3 p-3">
                <button
                  type="button"
                  className="btn btn-secondary w-100"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={signOutHandler}
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
