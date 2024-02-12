import React, { useContext, useEffect } from "react";
import NavigationBar from "../Global/navigation/NavigationBar";

import "./Schedules.css";

import { Schedule } from "../Global/ScheduleApi";
import ScheduleContext from "../Global/ScheduleContext";
import axios from "axios";

function Schedules() {
  const { assigned, description, taskDate, status, background } =
    useContext(ScheduleContext);

  console.log(background);
  return (
    <div>
      {" "}
      <NavigationBar>
        <div className="mt-3 text-center schedule">
          <div className="border-bottom border-black mb-4">
            <h2>Schedules</h2>
          </div>

          <div className="mx-auto">
            <div className="row justify-around rounded-4 text-center shadow">
              <div className="col-12 col-md-2 task shadow text-center rounded-4">
                <div className="new-task-header my-2 border-bottom border-black">
                  <h3>Pending</h3>
                </div>
                <div className="overflow-auto">
                  {" "}
                  <div className="new-task shadow mx-auto rounded-3 p-2">
                    <div className="text-start">
                      <h5>Name</h5>
                      <p>Description</p>
                    </div>
                    <hr />
                    <div>
                      <p className="bg-primary">Pending</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 task shadow text-center rounded-4">
                <div className="new-task-header my-2   border-bottom border-black">
                  <h3>Progress</h3>
                </div>
                <div className="overflow-auto">
                  <div className="new-task shadow mx-auto rounded-3 p-2">
                    <div className="text-start">
                      <h5>Name</h5>
                      <p>Description</p>
                    </div>
                    <hr />
                    <div>
                      <p className="bg-dark text-white">Progress</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-2 task shadow text-center rounded-4">
                <div className="new-task-header my-2 border-bottom border-black">
                  <h3>Completed</h3>
                </div>
                <div className="overflow-auto">
                  {" "}
                  <div className="new-task shadow mx-auto rounded-3 p-2">
                    <div className="text-start">
                      <h5>Name</h5>
                      <p>Description</p>
                    </div>
                    <hr />
                    <div>
                      <p className="bg-success">Complete</p>
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

export default Schedules;
