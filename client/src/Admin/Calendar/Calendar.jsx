import React, { useContext, useEffect, useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import ScheduleContext from "../Global/ScheduleContext";
import {
  // fa-solid,
  faFlag,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Buttons from "../Global/buttons/Buttons";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import listPlugin from "@fullcalendar/list";
import NavigationBar from "../Global/navigation/NavigationBar";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

import "./Calendar.css";
// import ScheduleContext from "../Global/ScheduleContext";
import axios from "axios";

function Calendars() {
  const [currentEvents, setCurrentEvents] = useState([]);
  const [task, setTask] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    title: "",
  });

  const onChangeHandler = (event) => {
    setTask((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  console.log(task);

  const onClickHandleEvents = (e) => {
    e.preventDefault();
    // try {
    //   axios.put("", task).then((res) => {
    //     console.log(res);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    // e.preventDefault();

    if (
      task.title &&
      task.startDate &&
      task.endDate &&
      task.startTime &&
      task.endTime
    ) {
      setCurrentEvents([
        ...currentEvents,
        {
          title: task.title,
          end: `${task.endDate}T${task.endTime}`,
          start: `${task.startDate}T${task.startTime}`,
        },
      ]);
      setTask([{ startDate: "", endDate: "", time: "", title: "" }]);
    }
    console.log();
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <div>
      <NavigationBar>
        {" "}
        <div className="text-center">
          <div className="border-bottom border-black mb-4 ps-5">
            <h2>Calendar</h2>
          </div>
          <div className="calendar">
            <div className="row justify-around shadow p-3 rounded-4">
              <div className="col-12 col-md-7 d-none d-md-block shadow p-2 rounded">
                <FullCalendar
                  type="timeGrid"
                  duration={{ days: 4 }}
                  views={{}}
                  height="80vh"
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                    multiMonthPlugin,
                  ]}
                  headerToolbar={{
                    left: "prev,next, today",
                    center: "title",
                    right:
                      "dayGridMonth,timeGridWeek,timeGridDay,multiMonthYear,listMonth",
                  }}
                  multiMonthMaxColumns="1"
                  editable={true}
                  selectable={true}
                  dayMaxEvent={true}
                  selectMirror={true}
                  dayMaxEventRows={true}
                  // select={handleDateClick}
                  eventClick={handleEventClick}
                  events={currentEvents}
                  timeFormat={"H:mm"}
                />
              </div>
              <div className="col-12 col-md-4 shadow rounded-4">
                <div className="my-2 border-bottom border-black">
                  <Buttons
                    btnClass="btn w-100 btn-primary mb-3"
                    label="Add Schedule"
                    modal="modal"
                    modalTarget="#addSchedule"
                  />
                </div>
                <div className="schedules-tasks shadow rounded-4">
                  <div className="sticky top-0 bg-white z-10 border-bottom border-primary p-2">
                    <h4>Updated Schedules</h4>
                  </div>

                  <div className="progress-task shadow p-3 rounded-3 m-3">
                    <div className="text-start">
                      <h5>Call Nft</h5>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavigationBar>
      <div
        class="modal fade"
        id="addSchedule"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="modalTitleId">
                Schedule New Task
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="d-flex flex-column" onSubmit={onClickHandleEvents}>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      id="startDate"
                      class="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      id="endDate"
                      class="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Start Time
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      id="startTime"
                      class="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      End Time
                    </label>
                    <input
                      type="time"
                      name="endTime"
                      id="endTime"
                      class="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      class="form-control"
                      placeholder=""
                      aria-describedby="helpId"
                      onChange={onChangeHandler}
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="" class="form-label">
                      Assign Task To
                    </label>

                    <select
                      class="form-select"
                      name="assign"
                      id="ass"
                      onChange={onChangeHandler}
                    >
                      <option selected>Select one</option>
                      <option value="">New Delhi</option>
                      <option value="">Istanbul</option>
                      <option value="">Jakarta</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="d-flex gap-3">
                  <button
                    type="button"
                    class="btn btn-secondary w-100"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="btn btn-primary w-100"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendars;
