import React from "react";

import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, updateEmployee }) => {
  return (
    <div
      id="tasklist"
      className="min-h-[220px] sm:min-h-[260px] lg:h-[55%] overflow-x-auto flex items-stretch justify-start gap-3 sm:gap-5 flex-nowrap w-full py-4 sm:py-5 mt-4 sm:mt-5"
    >
      {data?.tasks?.map((task) => {
        if (task.active) {
          return (
            <AcceptTask
              key={task.id}
              data={task}
              updateEmployee={updateEmployee}
              employee={data}
            />
          );
        }

        if (task.newTask) {
          return (
            <NewTask
              key={task.id}
              data={task}
              updateEmployee={updateEmployee}
              employee={data}
            />
          );
        }

        if (task.completed) {
          return (
            <CompleteTask
              key={task.id}
              data={task}
            />
          );
        }

        if (task.failed) {
          return (
            <FailedTask
              key={task.id}
              data={task}
            />
          );
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;