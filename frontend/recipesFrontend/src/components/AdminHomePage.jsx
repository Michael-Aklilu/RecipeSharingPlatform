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
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const adminJSON = JSON.parse(window.localStorage.getItem("LoggedInAdmin"));
    setAdmin(adminJSON);
  }, []);

  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,1fr] bg-stone-200">
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
      />
      <RemoveUser open={openRemoveUser} setOpen={setOpenRemoveUser} />
      <AddRecipe open={openAddRecipe} setOpen={setOpenAddRecipe} />
      <RemoveRecipe open={openRemoveRecipe} setOpen={setOpenRemoveRecipe} />
      <RemoveComment open={openRemoveComment} setOpen={setOpenRemoveComment} />
      <SignOut open={openSignOut} setOpenSignOut={setOpenSignOut} />
      <AdminDashboard
        admin={admin}
        userService={userService}
        recipeService={recipeService}
        adminService={adminService}
      />
    </div>
  );
};

export default AdminHomePage;
