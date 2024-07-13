import { useState } from "react";
import useAuth from "./useAuth";

function Form() {
  const { auth, authenticated, error } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleForm(event) {
    event.preventDefault();
    auth(username, password);
  }

  return (
    <>
      <div className="w-max p-10 shadow-md mx-auto mt-40 bg-white relative">
        <h1 className="text-center mb-6 font-bold text-2xl" title="Sign In">
          Sign in
        </h1>
        {authenticated && (
          <p className="text-center text-green-600 font-semibold ">New User</p>
        )}
        {error && (
          <p className="text-sm text-red-600 text-center m-4">{error}</p>
        )}
        <form
          onSubmit={handleForm}
          className="flex flex-col gap-4 items-center"
        >
          <div>
            <label htmlFor="username">Username</label>
            <br />
            <input
              id="username"
              type="text"
              className="outline-none rounded-full bg-[#d8e57b] py-2 px-6"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              id="password"
              type="password"
              className="outline-none rounded-full bg-[#d8e57b] py-2 px-6"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>

          <button className="w-max py-1 px-4 text-sm rounded-md border mt-8 border-black">
            Sign In
          </button>
          <button
            className="w-max py-1 px-4 text-sm rounded-md border border-black disabled:border-gray-400 disabled:cursor-not-allowed disabled:text-gray-400"
            disabled
          >
            Sign Up
          </button>
          <p className="absolute bottom-0 right-0 text-xs p-1 text-violet-800">
            Forgot password?
          </p>
        </form>
      </div>
    </>
  );
}

export default Form;
