import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import MenuIcon from "@mui/icons-material/Menu";
import "./navigationBar.css";

import axios from "axios";
import Header from "../header/Header";
function NavigationBar({ children }) {
  const [toggled, setToggled] = useState(false);
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
      <Header>
        <div className="d-flex justify-between">
          <div style={{ padding: 2 }}>
            <MenuIcon
              onClick={() => setToggled(!toggled)}
              sx={{ fontSize: 40 }}
            />
            <div></div>
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#signOut"
            className="signOut rounded-3 py-1 me-3"
          >
            Sign Out
          </button>
        </div>
      </Header>
      <div
        className="d-flex"
        style={{ display: "flex", height: "100%", minHeight: "94vh" }}
      >
        <Sidebar
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          breakPoint="always"
          backgroundColor="#e5e5e5"
        >
          <Menu transitionDuration={1000}>
            <MenuItem>
              <Link to="/AdminDashboard">Dashboard</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/AdminProjects">Projects</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/AdminCollabs">Collabs</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/AdminCalendar">Calendar</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/AdminSchedule">Schedules</Link>
            </MenuItem>
            <SubMenu label="Settings">
              <MenuItem> Settings</MenuItem>
              <MenuItem>
                {" "}
                <Link to="/AdminAccount">Admin Account</Link>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>

        <div className="container">
          <div className="container">{children}</div>
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
