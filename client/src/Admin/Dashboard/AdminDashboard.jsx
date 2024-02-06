import React, { useState } from "react";

import NavigationBar from "../Global/navigation/NavigationBar";
import LineChartGraph from "./LineChartGraph";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <NavigationBar>
        <div className="admin-top-header container w-100 shadow p-2 rounded-3">
          <div className="row w-100  justify-between">
            <div className="col-9">
              <div className="row top-header-row justify-between gap-2 mb-3">
                <div className="col-12 col-md-2 top-header-col p-2">
                  <div>
                    <h3>Collabs</h3>
                    <p>Text</p>
                    <p>100</p>
                  </div>
                </div>
                <div className="col-12 col-md-2 top-header-col p-2">
                  <div>
                    <h3>Collabs</h3>
                    <p>Text</p>
                    <p>100</p>
                  </div>
                </div>
                <div className="col-12 col-md-2 top-header-col p-2">
                  <div>
                    <h3>Collabs</h3>
                    <p>Text</p>
                    <p>100</p>
                  </div>
                </div>
                <div className="col-12 col-md-2 top-header-col p-2">
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
                  <div class="card text-start mb-3">
                    <div class="card-body">
                      <h4 class="card-title">Title</h4>
                      <p class="card-text">Body</p>
                    </div>
                  </div>
                  <div class="card text-start mb-3">
                    <div class="card-body">
                      <h4 class="card-title">Title</h4>
                      <p class="card-text">Body</p>
                    </div>
                  </div>
                  <div class="card text-start mb-3">
                    <div class="card-body">
                      <h4 class="card-title">Title</h4>
                      <p class="card-text">Body</p>
                    </div>
                  </div>
                  <div class="card text-start mb-3">
                    <div class="card-body">
                      <h4 class="card-title">Title</h4>
                      <p class="card-text">Body</p>
                    </div>
                  </div>
                  <div class="card text-start mb-3">
                    <div class="card-body">
                      <h4 class="card-title">Title</h4>
                      <p class="card-text">Body</p>
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
