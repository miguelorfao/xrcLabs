import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import multiMonthPlugin from "@fullcalendar/multimonth";
import listPlugin from "@fullcalendar/list";
import NavigationBar from "../Global/navigation/NavigationBar";
import "react-calendar/dist/Calendar.css";
import Calendar from "react-calendar";

function Calendars() {
  const [currentEvents, setCurrentEvents] = useState([""]);
  const [isOpen, setIsOpen] = useState(false);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter an event title");
    const calendarApi = selected.view.calendar;
    console.log(title);
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
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
        <div className="mt-3 text-center">
          <div className="border-bottom border-black mb-4 ps-5">
            <h2>Calendar</h2>
          </div>
        </div>
        <div className="w-100 container">
          <div className="row justify-around align-middle">
            <div className="col-12 col-md-3">
              <div class="card shadow rounded-5" style={{ width: "21rem" }}>
                <div class="card-body">
                  <div className="header border-bottom mb-3">
                    <h4 class="card-title text-center">Agenda</h4>
                  </div>
                  <div className="mb-3 w-100">
                    <Calendar />
                  </div>
                  <hr />
                  <div className="agenda-list">
                    <ul class="list-group list-group-flush">
                      {currentEvents.map((events) => (
                        <li class="list-group-item mb-3 shadow">
                          <div>{events.title}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-8 d-none d-md-block">
              <div className="admin-calendar rounded-4 shadow">
                <FullCalendar
                  views={{}}
                  height="85vh"
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
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  dayMaxEvent={true}
                  selectMirror={true}
                  dayMaxEventRows={true}
                  select={handleDateClick}
                  eventClick={handleEventClick}
                  eventsSet={(events) => setCurrentEvents(events)}
                />
              </div>
            </div>
          </div>
        </div>
      </NavigationBar>
    </div>
  );
}

export default Calendars;
