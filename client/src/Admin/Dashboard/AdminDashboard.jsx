import React, { useContext, useState } from "react";

import NavigationBar from "../Global/navigation/NavigationBar";
import LineChartGraph from "./LineChartGraph";
import "./AdminDashboard.css";
import ScheduleContext from "../Global/ScheduleContext";

function AdminDashboard() {
  const { assigned, description, taskDate, status, background } =
    useContext(ScheduleContext);
  return (
    <div>
      <NavigationBar>
        <div className="admin-top-header container w-100 shadow p-2 rounded-3">
          <div className="row w-100  justify-between">
            <div className="col-9">
              <div className="row top-header-row justify-between gap-2 mb-3">
                <div className="col-12 col-md-2 top-header-col p-2 text-center">
                  <div>
                    <h3>Collabs</h3>
                    <p>Text</p>
                    <p>100</p>
                  </div>
                </div>
                <div className="col-12 col-md-2 top-header-col p-2 text-center">
                  <div>
                    <h3>Collabs</h3>
                    <p>Text</p>
                    <p>100</p>
                  </div>
                </div>
                <div className="col-12 col-md-2 top-header-col p-2 text-center">
                  <div>
                    <h3>Collabs</h3>
                    <p>Text</p>
                    <p>100</p>
                  </div>
                </div>
                <div className="col-12 col-md-2 top-header-col p-2 text-center">
                  <div>
                    <h3>Collabs</h3>
                    <p>Text</p>
                    <p>100</p>
                  </div>
                </div>
              </div>
              <div className="row row-graph">
                <div className="col-12 col-md-12 col-graph">
                  <LineChartGraph />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-12">
                  <div className="text-start my-3 border-bottom border-black">
                    <h4>Title</h4>
                  </div>
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">Collabs</li>
                    <li class="list-group-item">Item</li>
                    <li class="list-group-item">Item</li>
                    <li class="list-group-item">Item</li>
                    <li class="list-group-item">Item</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="row">
                <div className="col-12">
                  <div className="border-bottom border-black mb-3">
                    <h4>Upcoming Events</h4>
                  </div>
                  <div className="card text-start mb-3">
                    <div className="card-body text-center">
                      <h4 className="card-title">{assigned}</h4>
                      <p className="card-text">{description}</p>
                      <p className={background}>{status}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavigationBar>
    </div>
  );
}

export default AdminDashboard;
