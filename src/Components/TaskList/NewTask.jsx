import React from "react";

const NewTask = ({
  data,
  employee,
  updateEmployee,
}) => {
  const acceptTask = () => {
    const updatedEmployee = {
      ...employee,

      tasks: employee.tasks.map((task) => {
        if (task.id === data.id) {
          return {
            ...task,
            active: true,
            newTask: false,
            completed: false,
            failed: false,
          };
        }

        return task;
      }),

      taskNumbers: {
        ...employee.taskNumbers,
        newTask: Math.max(
          0,
          employee.taskNumbers.newTask - 1
        ),
        active: employee.taskNumbers.active + 1,
      },
    };

    updateEmployee(updatedEmployee);
  };

  return (
    <div className="flex-shrink-0 min-h-[220px] w-[260px] sm:w-[280px] lg:w-[300px] p-4 sm:p-5 bg-green-400 text-black rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-green-700 text-white px-3 py-1 rounded text-sm">
          {data.category}
        </h3>

        <h4 className="text-sm">
          {data.taskDate}
        </h4>
      </div>

      <h2 className="mt-5 font-semibold text-xl sm:text-2xl break-words">
        {data.taskTitle}
      </h2>

      <p className="text-sm mt-2 break-words">
        {data.taskDescription}
      </p>

      <div className="mt-4">
        <button
          onClick={acceptTask}
          className="bg-black text-white py-2 px-4 rounded w-full hover:bg-gray-800"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;