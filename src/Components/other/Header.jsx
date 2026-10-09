import React from "react";

const Header = ({ changeUser, data }) => {
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    changeUser(null);
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-xl sm:text-2xl font-medium text-white">
        Hello
        <br />

        <span className="text-2xl sm:text-3xl font-semibold">
          {data?.firstName || "Admin"} 👋
        </span>
      </h1>

      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-sm text-base sm:text-lg font-medium self-start sm:self-auto"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;