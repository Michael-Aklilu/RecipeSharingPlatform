import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpService from "../services/signUp";

const SignUp = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signUpService.signUp({ username, name, password });
      setLoggedInUser(user);
      setUsername("");
      setPassword("");
      if (user) navigate("/UserHome");
    } catch {
      console.log("Account not created");
    }
    event.target.name.value = "";
    event.target.username.value = "";
    event.target.password.value = "";
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-login-bg bg-cover bg-center">
      <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl block text-center font-semibold text-white ">
            <i className="fa-solid fa-user text-white"></i> Sign Up
          </h1>
          <hr className="mt-3" />
          <div className="mt-3">
            <label htmlFor="name" className="block text-base mb-2 text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleName}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Name..."
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="username"
              className="block text-base mb-2 text-white"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleUsername}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Username..."
            />
          </div>
          <div className="mt-3">
            <label
              htmlFor="password"
              className="block text-base mb-2 text-white"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={handlePassword}
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password..."
            />
          </div>
          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="border-2 border-white-600  bg-white text-gray-700 py-1 px-4 rounded-md"
            >
              Sign Up
            </button>
          </div>
          <div className="mt-3 flex ">
            <a className="text-white" href="">
              Forgot Password?
            </a>
          </div>

          <div className="mt-1 flex ">
            <Link to="/login" className="text-white">
              Already have an account? Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
