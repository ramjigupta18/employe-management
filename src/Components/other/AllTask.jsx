import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 overflow-x-auto">
      <div className="bg-red-400 text-black mb-2 py-3 px-4 flex justify-between rounded min-w-[700px]">
        <h2 className="text-lg font-medium w-1/5">
          Employee Name
        </h2>

        <h3 className="text-lg font-medium w-1/5">
          New Task
        </h3>

        <h5 className="text-lg font-medium w-1/5">
          Active Task
        </h5>

        <h5 className="text-lg font-medium w-1/5">
          Completed
        </h5>

        <h5 className="text-lg font-medium w-1/5">
          Failed
        </h5>
      </div>

      <div>
        {userData?.map((employee) => (
          <div
            key={employee.id}
            className="bg-emerald-500 mb-2 py-3 px-4 flex justify-between rounded min-w-[700px]"
          >
            <h2 className="text-lg font-medium w-1/5">
              {employee.firstName}
            </h2>

            <h3 className="text-lg font-medium w-1/5">
              {employee.taskNumbers.newTask}
            </h3>

            <h5 className="text-lg font-medium w-1/5">
              {employee.taskNumbers.active}
            </h5>

            <h5 className="text-lg font-medium w-1/5">
              {employee.taskNumbers.completed}
            </h5>

            <h5 className="text-lg font-medium w-1/5">
              {employee.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;