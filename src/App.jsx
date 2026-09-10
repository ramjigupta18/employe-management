
import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeDashboard from "./Components/Dashboard/EmployeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./Components/context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);

        setUser(userData.role);
        setLoggedInUserData(userData.data || null);
      } catch (error) {
        console.error("Invalid login data:", error);
        localStorage.removeItem("loggedInUser");
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    const enteredEmail = email.trim().toLowerCase();
    const enteredPassword = password.trim();

    // Admin Login
    if (
      enteredEmail === "admin@example.com" &&
      enteredPassword === "123"
    ) {
      setUser("admin");
      setLoggedInUserData(null);

      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({
          role: "admin",
        })
      );

      return;
    }

    // Employee Login
    if (userData && userData.length > 0) {
      const employee = userData.find(
        (employee) =>
          employee.email.toLowerCase() === enteredEmail &&
          employee.password === enteredPassword
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);

        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            data: employee,
          })
        );

        return;
      }
    }

    alert("Invalid Email or Password");
  };

  const handleEmployeeUpdate = (updatedEmployee) => {
    setLoggedInUserData(updatedEmployee);

    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({
        role: "employee",
        data: updatedEmployee,
      })
    );
  };

  return (
    <div>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && (
        <AdminDashboard changeUser={setUser} />
      )}

      {user === "employee" && (
        <EmployeDashboard
          changeUser={setUser}
          data={loggedInUserData}
          updateEmployee={handleEmployeeUpdate}
        />
      )}
    </div>
  );
};

export default App;
