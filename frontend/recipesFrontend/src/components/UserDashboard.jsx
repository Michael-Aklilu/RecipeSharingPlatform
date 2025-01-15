import { useState } from "react";
import SideBar from "./UserProfile/SideBar";
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

const UserDashboard = () => {
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
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,1fr] bg-stone-200">
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
    </div>
  );
};

export default UserDashboard;
