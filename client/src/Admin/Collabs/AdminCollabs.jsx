import React, { useState } from "react";

import NavigationBar from "../Global/navigation/NavigationBar";

import "./AdminCollabs.css";

function AdminCollabs() {
  return (
    <div>
      <NavigationBar>
        {" "}
        <div className="mt-3 text-center">
          <div className="border-bottom border-black mb-4">
            <h2>Collabs</h2>
          </div>
          <div className="collabs shadow mx-auto rounded-4">
            <div className="collabs-btn border-bottom border-black">
              <div className="flex justify-end gap-3 ">
                <button className="excel-btn rounded-2">Upload Excel</button>
                <button className="excel-btn rounded-2">Download Excel</button>
              </div>
            </div>
          </div>
        </div>
      </NavigationBar>
    </div>
  );
}

export default AdminCollabs;
