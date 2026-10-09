import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-6 sm:mt-10 gap-4 sm:gap-5">
      <div className="rounded-xl min-w-0 py-5 sm:py-6 px-5 sm:px-7 lg:px-9 bg-red-400 text-black">
        <h2 className="text-3xl font-semibold">
          {data?.taskNumbers?.newTask || 0}
        </h2>

        <h3 className="text-xl font-medium">
          New Task
        </h3>
      </div>

      <div className="rounded-xl min-w-0 py-5 sm:py-6 px-5 sm:px-7 lg:px-9 bg-blue-400 
      text-black">
        <h2 className="text-3xl font-semibold">
          {data?.taskNumbers?.completed || 0}
        </h2>

        <h3 className="text-xl font-medium">
          Completed Task
        </h3>
      </div>

      <div className="rounded-xl min-w-0 py-5 sm:py-6 px-5 sm:px-7 lg:px-9 bg-green-400 
      text-black">
        <h2 className="text-3xl font-semibold">
          {data?.taskNumbers?.active || 0}
        </h2>

        <h3 className="text-xl font-medium">
          Accepted Task
        </h3>
      </div>

      <div className="rounded-xl min-w-0 py-5 sm:py-6 px-5 sm:px-7 lg:px-9 bg-yellow-400 text-black">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          {data?.taskNumbers?.failed || 0}
        </h2>

        <h3 className="text-lg sm:text-xl font-medium">
          Failed Task
        </h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;