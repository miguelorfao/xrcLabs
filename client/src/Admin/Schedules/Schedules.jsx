import React, { useContext, useEffect } from "react";
import NavigationBar from "../Global/navigation/NavigationBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Schedules.css";

// import { Schedule } from "../Global/ScheduleApi";
import ScheduleContext from "../Global/ScheduleContext";
import {
  // fa-solid,
  faFlag,
  faClock,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
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
            <div className="schedule-tasks w-100 h-auto p-3 d-flex gap-4 ju">
              <div className="tasks shadow">
                <div className="sticky top-0 bg-white z-10 border-bottom border-warning p-2">
                  <h4>Pending Tasks</h4>
                </div>
                <div className="pending-task shadow p-3 rounded-3 m-3">
                  <div className="text-start">
                    <h5>Call Title</h5>
                    <h6>Time: 20:00</h6>
                    <p>Call taken by: Reefli</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-around">
                    <FontAwesomeIcon icon={faFlag} />
                    <div className="d-flex gap-3">
                      <FontAwesomeIcon icon={faClock} />
                      <span>Mar 4</span>
                    </div>

                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </div>
              </div>
              <div className="tasks shadow">
                <div className="sticky top-0 bg-white z-10 border-bottom border-primary p-2">
                  <h4>Progress Tasks</h4>
                </div>

                <div className="progress-task shadow p-3 rounded-3 m-3">
                  <div className="text-start">
                    <h5>Call Title</h5>
                    <h6>Time: 20:00</h6>
                    <p>Call taken by: Reefli</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-around">
                    <FontAwesomeIcon icon={faFlag} />
                    <div className="d-flex gap-3">
                      <FontAwesomeIcon icon={faClock} />
                      <span>Mar 4</span>
                    </div>
                    <FontAwesomeIcon icon={faEllipsis} />
                  </div>
                </div>
              </div>
              <div className="tasks shadow">
                <div className="sticky top-0 bg-white z-10 border-bottom border-success p-2">
                  <h4>Completed Tasks</h4>
                </div>
                <div className="completed-task shadow p-3 rounded-3 m-3">
                  <div className="text-start">
                    <h5>Call Title</h5>
                    <h6>Time: 20:00</h6>
                    <p>Call taken by: Reefli</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-around">
                    <FontAwesomeIcon icon={faFlag} />
                    <div className="d-flex gap-3">
                      <FontAwesomeIcon icon={faClock} />
                      <span>Mar 4</span>
                    </div>
                    <FontAwesomeIcon icon={faEllipsis} />
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
