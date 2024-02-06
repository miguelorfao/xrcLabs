import { useEffect, useState } from "react";

import ScheduleContext from "./ScheduleContext";

export const ScheduleProvider = ({ children }) => {
  // set assigned user to task
  const [assigned, setAssigned] = useState("");
  // set description for the task
  const [description, setDescription] = useState("");
  //set the date for the task
  const [taskDate, setTaskDate] = useState("");
  // get the status for the current task
  const [status, setStatus] = useState("");

  return (
    <ScheduleContext.Provider
      value={{
        assigned,
        setAssigned,
        description,
        setDescription,
        taskDate,
        setTaskDate,
        status,
        setStatus,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
