import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginService from "../services/login";
import userService from "../services/users";
import Notification from "./Notifications/Notification";
const Login = ({ setLoggedInUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (username === "") {
      setError("");
      setTimeout(() => setError("Username is missing"), 0);
      return;
    }
    if (password === "") {
      setError("");
      setTimeout(() => setError("Password is missing"), 0);
      return;
    }

    try {
      const user = await loginService.login({ username, password });

      userService.setToken(user.token);
      setLoggedInUser(user);
      setUsername("");
      setPassword("");

      window.localStorage.setItem("LoggedInUser", JSON.stringify(user));

      if (user) navigate("/UserProfile");
    } catch {
      setError("");
      setTimeout(() => setError("Wrong credentials"), 0);
      console.log("Wrong credentials");
      return;
    }
    event.target.username.value = "";
    event.target.password.value = "";
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-login-bg bg-cover bg-center">
      <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
        <form onSubmit={handleSubmit}>
          <h1 className="text-3xl block text-center font-semibold text-white ">
            <i className="fa-solid fa-user text-white"></i> Login
          </h1>
          <hr className="mt-3" />
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
              onChange={handlePassword}
              id="password"
              className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
              placeholder="Enter Password..."
            />
          </div>
          <Notification error={error} setError={setError} />

          <div className="mt-5 flex justify-center">
            <button
              type="submit"
              className="border-2 border-white-600  bg-white text-gray-700 py-1 px-4 rounded-md"
            >
              Login
            </button>
          </div>
          <div className="mt-3 flex ">
            <button
              onClick={(event) => {
                event.preventDefault();
                navigate("/LandingPage");
              }}
              className="text-white"
            >
              Browse as guest?
            </button>
          </div>

          <div className="mt-1 flex ">
            <Link className="text-white" to="/SignUp">
              Don&#39;t have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
