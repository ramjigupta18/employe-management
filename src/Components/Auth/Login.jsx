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
    <div className="flex h-screen w-screen items-center justify-center bg-[#111]">
      <div className="w-[400px] border-2 border-emerald-600 p-10 rounded-xl">
        <h1 className="text-3xl text-white text-center font-semibold mb-8">
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
            className="w-full outline-none bg-transparent text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-lg placeholder:text-gray-400"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Enter your password"
            className="w-full outline-none bg-transparent text-white border-2 border-emerald-600 rounded-full py-3 px-5 text-lg placeholder:text-gray-400 mt-4"
          />

          <button
            type="submit"
            className="text-white bg-emerald-600 hover:bg-emerald-700 rounded-full py-3 px-5 text-lg mt-7 w-full"
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