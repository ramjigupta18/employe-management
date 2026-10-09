import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#111] px-4 py-6">
      <div className="w-full max-w-[400px] border-2 border-emerald-600 p-5 sm:p-8 md:p-10 rounded-xl">
        <h1 className="text-2xl sm:text-3xl text-white text-center font-semibold mb-6 sm:mb-8">
          Employee Management
        </h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Enter your email"
            className="w-full min-w-0 outline-none bg-transparent text-white border-2 border-emerald-600 rounded-full py-3 px-4 sm:px-5 text-base sm:text-lg placeholder:text-gray-400 mb-4"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="w-full min-w-0 outline-none bg-transparent text-white border-2 border-emerald-600 rounded-full py-3 px-4 sm:px-5 text-base sm:text-lg placeholder:text-gray-400"
          />

          <button
            type="submit"
            className="text-white bg-emerald-600 hover:bg-emerald-700 rounded-full py-3 px-5 text-base sm:text-lg mt-6 sm:mt-7 w-full"
          >
            Log In
          </button>
        </form>

        <div className="text-gray-400 text-sm mt-8">
          <p className="mb-2">
            <b>Admin:</b> admin@example.com / 123
          </p>

          <p>
            <b>Employee:</b> aarav@example.com / 123
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;