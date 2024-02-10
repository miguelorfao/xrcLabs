import { useEffect, useState } from "react";

import ScheduleContext from "./ScheduleContext";
import axios from "axios";

export const ScheduleProvider = ({ children }) => {
  let background;
  // set assigned user to task
  const [assigned, setAssigned] = useState("");
  // set description for the task
  const [description, setDescription] = useState("");
  //set the date for the task
  const [taskDate, setTaskDate] = useState("");
  // get the status for the current task
  const [status, setStatus] = useState("");

  // useEffect(() => {
  //   try {
  //     axios.get("/AdminCalendar").then((res) => {
  //       if (res.data === "Success") {
  //         setAssigned("Miguel");
  //         setDescription("Description");
  //         setTaskDate("2024-02-07");
  //         setStatus("Overdue");
  //       } else {
  //         console.log(res.data);
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  switch (status) {
    case "Approved":
      background = "bg-primary rounded-2 text-white";
      break;
    case "Pending":
      background = "bg-warning rounded-2 text-white";
      break;
    case "Progress":
      background = "bg-black rounded-2 text-white";
      break;
    case "Completed":
      background = "bg-success rounded-2 text-white";
      break;
    case "Overdue":
      background = "bg-danger rounded-2 text-white ";
      break;
    default:
      background = "bg-white rounded-2 text-black";
  }
  return (
    <ScheduleContext.Provider
      value={{
        assigned,

        description,

        taskDate,

        status,
        background,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
