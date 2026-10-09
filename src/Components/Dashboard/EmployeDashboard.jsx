import React from "react";
import Header from "../other/Header";
import TaskListNumbers from "../other/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeDashboard = ({
  changeUser,
  data,
  updateEmployee,
}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-10 bg-[#1C1C1C] min-h-screen text-white">
      <Header
        changeUser={changeUser}
        data={data}
      />

      <TaskListNumbers data={data} />

      <TaskList
        data={data}
        updateEmployee={updateEmployee}
      />
    </div>
  );
};

export default EmployeDashboard;