import { useState, useEffect } from "react";
import SideBar from "./UserSideBar/SideBar";
import AddUser from "./Forms/AddUser";
import RemoveUser from "./Forms/RemoveUser";
import AddRecipe from "./Forms/AddRecipe";
import RemoveRecipe from "./Forms/RemoveRecipe";
import RemoveComment from "./Forms/RemoveComment";
import SignOut from "./Forms/SignOut";
import AddAdmin from "./Forms/AddAdmin";
import userService from "../services/users";
import recipeService from "../services/recipes";
import adminService from "../services/admin";
import Dashboard from "./UserDashboard/Dashboard";

const UserHomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openRemoveUser, setOpenRemoveUser] = useState(false);
  const [openAddRecipe, setOpenAddRecipe] = useState(false);
  const [openRemoveRecipe, setOpenRemoveRecipe] = useState(false);
  const [openRemoveComment, setOpenRemoveComment] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [showAddedUser, setShowAddedUser] = useState("");
  const [showRemovedUser, setShowRemovedUser] = useState("");
  const [addedRecipe, setAddedRecipe] = useState("");
  const [removedRecipe, setRemovedRecipe] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userJSON = JSON.parse(window.localStorage.getItem("LoggedInUser"));
    setUser(userJSON);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[220px,1fr] gap-4 p-4 bg-stone-200 ">
      <SideBar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setOpenAddUser={setOpenAddUser}
        setOpenRemoveUser={setOpenRemoveUser}
        setOpenAddRecipe={setOpenAddRecipe}
        setOpenRemoveRecipe={setOpenRemoveRecipe}
        setOpenRemoveComment={setOpenRemoveComment}
        setOpenSignOut={setOpenSignOut}
        user={user}
        setOpenAddAdmin={setOpenAddAdmin}
      />

      <AddRecipe
        open={openAddRecipe}
        setOpen={setOpenAddRecipe}
        recipeService={recipeService}
        userService={userService}
        setAddedRecipe={setAddedRecipe}
      />

      <RemoveRecipe
        open={openRemoveRecipe}
        setOpen={setOpenRemoveRecipe}
        recipeService={recipeService}
        setRemovedRecipe={setRemovedRecipe}
      />

      <RemoveComment open={openRemoveComment} setOpen={setOpenRemoveComment} />
      <SignOut open={openSignOut} setOpen={setOpenSignOut} />

      <Dashboard
        user={user}
        recipeService={recipeService}
        adminService={adminService}
        addedRecipe={addedRecipe}
        removedRecipe={removedRecipe}
      />
    </div>
  );
};

export default UserHomePage;
