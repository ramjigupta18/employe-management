import React from "react";

const AcceptTask = ({
  data,
  employee,
  updateEmployee,
}) => {
  const completeTask = () => {
    const updatedEmployee = {
      ...employee,

      tasks: employee.tasks.map((task) => {
        if (task.id === data.id) {
          return {
            ...task,
            active: false,
            newTask: false,
            completed: true,
            failed: false,
          };
        }

        return task;
      }),

      taskNumbers: {
        ...employee.taskNumbers,
        active: Math.max(
          0,
          employee.taskNumbers.active - 1
        ),
        completed:
          employee.taskNumbers.completed + 1,
      },
    };

    updateEmployee(updatedEmployee);
  };

  const failTask = () => {
    const updatedEmployee = {
      ...employee,

      tasks: employee.tasks.map((task) => {
        if (task.id === data.id) {
          return {
            ...task,
            active: false,
            newTask: false,
            completed: false,
            failed: true,
          };
        }

        return task;
      }),

      taskNumbers: {
        ...employee.taskNumbers,
        active: Math.max(
          0,
          employee.taskNumbers.active - 1
        ),
        failed:
          employee.taskNumbers.failed + 1,
      },
    };

    updateEmployee(updatedEmployee);
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 text-black rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-white px-3 py-1 rounded text-sm">
          {data.category}
        </h3>

        <h4 className="text-sm">
          {data.taskDate}
        </h4>
      </div>

      <h2 className="mt-5 font-semibold text-2xl">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>

      <div className="flex flex-col gap-2 mt-4">
        <button
          onClick={completeTask}
          className="bg-green-600 text-white py-2 px-2 rounded hover:bg-green-700"
        >
          Mark as Completed
        </button>

        <button
          onClick={failTask}
          className="bg-red-700 text-white py-2 px-2 rounded hover:bg-red-800"
        >
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;