import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      !taskTitle ||
      !taskDescription ||
      !taskDate ||
      !assignTo ||
      !category
    ) {
      alert("Please fill all fields");
      return;
    }

    const employee = userData.find(
      (emp) =>
        emp.firstName.toLowerCase() ===
        assignTo.trim().toLowerCase()
    );

    if (!employee) {
      alert("Employee not found");
      return;
    }

    const newTask = {
      id: Date.now(),

      taskTitle,
      taskDescription,
      taskDate,
      category,

      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    const updatedData = userData.map((emp) => {
      if (emp.id === employee.id) {
        return {
          ...emp,

          tasks: [...emp.tasks, newTask],

          taskNumbers: {
            ...emp.taskNumbers,
            newTask: emp.taskNumbers.newTask + 1,
          },
        };
      }

      return emp;
    });

    setUserData(updatedData);

    alert(`Task assigned to ${employee.firstName}`);

    setTaskDate("");
    setAssignTo("");
    setCategory("");
    setTaskDescription("");
    setTaskTitle("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <h2 className="text-2xl font-semibold mb-5">
        Create New Task
      </h2>

      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm mb-1">
              Task Title
            </h3>

            <input
              value={taskTitle}
              onChange={(e) =>
                setTaskTitle(e.target.value)
              }
              type="text"
              placeholder="Make a UI design"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-500 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm mb-1">
              Date
            </h3>

            <input
              value={taskDate}
              onChange={(e) =>
                setTaskDate(e.target.value)
              }
              type="date"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-500 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm mb-1">
              Assign To
            </h3>

            <input
              value={assignTo}
              onChange={(e) =>
                setAssignTo(e.target.value)
              }
              type="text"
              placeholder="Employee Name e.g. Aarav"
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-500 mb-4"
            />
          </div>

          <div>
            <h3 className="text-sm mb-1">
              Category
            </h3>

            <input
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              type="text"
              placeholder="Design, Development, etc."
              className="text-sm py-2 px-3 w-4/5 rounded outline-none bg-transparent border border-gray-500 mb-4"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm mb-1">
            Description
          </h3>

          <textarea
            value={taskDescription}
            onChange={(e) =>
              setTaskDescription(e.target.value)
            }
            rows="8"
            placeholder="Enter task description..."
            className="w-full text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-500"
          />

          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 py-3 px-5 rounded text-sm mt-4 w-full"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;