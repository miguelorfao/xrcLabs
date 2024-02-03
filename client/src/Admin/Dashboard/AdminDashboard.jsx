import React, { useState } from "react";

import NavigationBar from "../Global/navigation/NavigationBar";
import LineChartGraph from "./LineChartGraph";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <NavigationBar>
        <div className="admin-top-header container text-center py-3">
          <div className="border-bottom border-black mb-4">
            <h2>Dashboard</h2>
          </div>
          <div className="row justify-center gap-2 mb-4 w-100">
            <div className="col-12 col-md-3 shadow header-data rounded-4 text-center py-3">
              <h4>Text</h4>
              <h5>text</h5>
              <p>text</p>
            </div>
            <div className="col-12 col-md-3 shadow header-data rounded-4 text-center py-3">
              {" "}
              <h4>Text</h4>
              <h5>text</h5>
              <p>text</p>
            </div>
            <div className="col-12 col-md-3 shadow header-data rounded-4 text-center py-3">
              {" "}
              <h4>Text</h4>
              <h5>text</h5>
              <p>text</p>
            </div>
          </div>
          <div className="row justify-between">
            <div className="col-12">
              <div className="graph">
                <div className="lineGraph rounded-4">
                  <LineChartGraph />
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
