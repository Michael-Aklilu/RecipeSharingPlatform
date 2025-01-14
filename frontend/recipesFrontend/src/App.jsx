import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserHomePage from "./components/userHomePage";
import AdminHomePage from "./components/AdminHomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminLogin from "./components/AdminLogin";
import AdminSignUp from "./components/AdminSignUp";
import UserProfile from "./components/UserDashboard";
import recipeService from "./services/recipes";
import userService from "./services/users";
import { useState, useEffect } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInAdmin, setLoggedInAdmin] = useState(null);
  const [showAddUserForm, setShowAddUserForm] = useState(false);

  useEffect(() => {
    const adminJSON = window.localStorage.getItem("LoggedInAdmin");
    if (adminJSON) {
      const admin = JSON.parse(adminJSON);
      setLoggedInAdmin(admin);
      userService.setToken(admin.token);
      recipeService.setToken(admin.token);
    }
    const userJSON = window.localStorage.getItem("LoggedInUser");

    if (userJSON) {
      const user = JSON.parse(userJSON);
      setLoggedInUser(user);
      recipeService.setToken(user.token);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/AdminHome"
          element={
            <AdminHomePage
              showAddUserForm={showAddUserForm}
              setShowAddUserForm={setShowAddUserForm}
            />
          }
        ></Route>
        <Route path="/UserHome" element={<UserHomePage />}></Route>
        <Route
          path="/login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="/SignUp"
          element={<SignUp setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="/AdminLogin"
          element={<AdminLogin setLoggedInAdmin={setLoggedInAdmin} />}
        ></Route>
        <Route
          path="/AdminSignUp"
          element={<AdminSignUp setLoggedInAdmin={setLoggedInAdmin} />}
        ></Route>
        <Route path="/UserProfile" element={<UserProfile />}></Route>
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
