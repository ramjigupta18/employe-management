import React from "react";

import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data, updateEmployee }) => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-5"
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