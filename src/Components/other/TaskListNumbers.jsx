import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <div className="flex flex-wrap mt-10 justify-between gap-5">
      <div className="rounded-xl flex-1 min-w-[200px] py-6 px-9 bg-red-400 text-black">
        <h2 className="text-3xl font-semibold">
          {data?.taskNumbers?.newTask || 0}
        </h2>

        <h3 className="text-xl font-medium">
          New Task
        </h3>
      </div>

      <div className="rounded-xl flex-1 min-w-[200px] py-6 px-9 bg-blue-400 text-black">
        <h2 className="text-3xl font-semibold">
          {data?.taskNumbers?.completed || 0}
        </h2>

        <h3 className="text-xl font-medium">
          Completed Task
        </h3>
      </div>

      <div className="rounded-xl flex-1 min-w-[200px] py-6 px-9 bg-green-400 text-black">
        <h2 className="text-3xl font-semibold">
          {data?.taskNumbers?.active || 0}
        </h2>

        <h3 className="text-xl font-medium">
          Accepted Task
        </h3>
      </div>

      <div className="rounded-xl flex-1 min-w-[200px] py-6 px-9 bg-yellow-400 text-black">
        <h2 className="text-3xl font-semibold">
          {data?.taskNumbers?.failed || 0}
        </h2>

        <h3 className="text-xl font-medium">
          Failed Task
        </h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;