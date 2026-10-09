import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 min-h-[220px] w-[260px] sm:w-[280px] lg:w-[300px] p-4 sm:p-5 bg-blue-400 text-black rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-blue-700 text-white px-3 py-1 rounded text-sm">
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
          disabled
          className="w-full bg-black text-white py-2 rounded"
        >
          Completed ✓
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;