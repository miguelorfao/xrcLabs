import React from "react";
import Buttons from "../../components/Buttons";
import NavigationBar from "../../components/NavigationBar";
import Tables from "../../components/Tables";

function AdminCollabs() {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid">
        <div className="row justify-content-around my-4">
          <div className="col col-md-2">
            {" "}
            <Buttons btnClass="btn btn-outline-info" label="Add Entry" />
          </div>
          <div className="col col-md-2">
            {" "}
            <Buttons btnClass="btn btn-outline-info" label="Upload Excel" />
          </div>
          <div className="col col-md-2">
            {" "}
            <Buttons btnClass="btn btn-outline-info" label="Download Excel" />
          </div>
          <div className="col col-md-2">
            {" "}
            <Buttons btnClass="btn btn-outline-info" label="Refresh Table" />
          </div>
        </div>
      </div>
      <div className="px-2">
        <Tables />
      </div>
    </div>
  );
}

export default AdminCollabs;
