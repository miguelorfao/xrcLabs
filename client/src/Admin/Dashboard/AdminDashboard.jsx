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
        <div className="admin-dashboard shadow p-3">
          <div className="d-flex gap-4 m-3">
            <div className="shadow w-25 text-center rounded-3 p-3">
              <h3>Collabs</h3>
              <p>Text</p>
              <p>100</p>
            </div>
            <div className="shadow w-25 text-center rounded-3 p-3">
              <h3>Collabs</h3>
              <p>Text</p>
              <p>100</p>
            </div>
            <div className="shadow w-25 text-center rounded-3 p-3">
              <h3>Collabs</h3>
              <p>Text</p>
              <p>100</p>
            </div>
            <div className="shadow w-25 text-center rounded-3 p-3">
              <h3>Collabs</h3>
              <p>Text</p>
              <p>100</p>
            </div>
            <div className="shadow w-25 text-center rounded-3 p-3">
              <h3>Collabs</h3>
              <p>Text</p>
              <p>100</p>
            </div>
          </div>
          <div className="graph">
            <div className="lineGraph">
              <LineChartGraph />
            </div>
          </div>
          <div class="table-responsive w-100 text-center admin-task-update">
            <caption>
              <h3>Schedules</h3>
            </caption>
            <hr />
            <table class="table list mt-3">
              <thead className="sticky top-0">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Discord User</th>
                  <th scope="col">Date & Time</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr class="shadow rounded-5">
                  <td scope="row">Call</td>
                  <td>DiscordUser</td>
                  <td>10/10/10 20:00</td>
                  <td className="text-success">Completed</td>
                </tr>
                <tr class="shadow rounded-5">
                  <td scope="row">Call</td>
                  <td>DiscordUser</td>
                  <td>10/10/10 20:00</td>
                  <td className="text-success">Completed</td>
                </tr>
                <tr class="shadow rounded-5">
                  <td scope="row">Call</td>
                  <td>DiscordUser</td>
                  <td>10/10/10 20:00</td>
                  <td className="text-success">Completed</td>
                </tr>
                <tr class="shadow rounded-5">
                  <td scope="row">Call</td>
                  <td>DiscordUser</td>
                  <td>10/10/10 20:00</td>
                  <td className="text-success">Completed</td>
                </tr>
                <tr class="shadow rounded-5">
                  <td scope="row">Call</td>
                  <td>DiscordUser</td>
                  <td>10/10/10 20:00</td>
                  <td className="text-success">Completed</td>
                </tr>
                <tr class="shadow rounded-5">
                  <td scope="row">Call</td>
                  <td>DiscordUser</td>
                  <td>10/10/10 20:00</td>
                  <td className="text-success">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </NavigationBar>
    </div>
  );
}

export default AdminDashboard;
