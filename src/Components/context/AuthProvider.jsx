import React, {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getLocalStorage,
  setLocalStorage,
} from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // First time only default data create karega
    setLocalStorage();

    const { employees } = getLocalStorage();

    setUserData(employees || []);
  }, []);

  const updateUserData = (data) => {
    setUserData(data);

    localStorage.setItem(
      "employees",
      JSON.stringify(data)
    );
  };

  return (
    <AuthContext.Provider
      value={[userData, updateUserData]}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
