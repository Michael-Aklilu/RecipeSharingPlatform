import AdminDashboard from "./AdminDashboard/AdminDashboard";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
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

import { useState, useEffect } from "react";

const AdminHomePage = ({}) => {
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
  const [removedRecipe, setRemovedRecipe] = useState("")
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const adminJSON = JSON.parse(window.localStorage.getItem("LoggedInAdmin"));
    setAdmin(adminJSON);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-[220px,1fr] gap-4 p-4 bg-stone-200">
      
      <AdminSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setOpenAddUser={setOpenAddUser}
        setOpenRemoveUser={setOpenRemoveUser}
        setOpenAddRecipe={setOpenAddRecipe}
        setOpenRemoveRecipe={setOpenRemoveRecipe}
        setOpenRemoveComment={setOpenRemoveComment}
        setOpenSignOut={setOpenSignOut}
        admin={admin}
        setOpenAddAdmin={setOpenAddAdmin}
      />
      <AddAdmin open={openAddAdmin} setOpen={setOpenAddAdmin} />
      <AddUser
        open={openAddUser}
        setOpen={setOpenAddUser}
        userService={userService}
        setShowAddedUser={setShowAddedUser}
      />
      <RemoveUser
        open={openRemoveUser}
        setOpen={setOpenRemoveUser}
        userService={userService}
        setShowRemovedUser={setShowRemovedUser}
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
      <AdminDashboard
        admin={admin}
        userService={userService}
        recipeService={recipeService}
        adminService={adminService}
        showAddedUser={showAddedUser}
        showRemovedUser={showRemovedUser}
        addedRecipe={addedRecipe}
        removedRecipe={removedRecipe}
      />
     
    </div>
  );
};

export default AdminHomePage;
