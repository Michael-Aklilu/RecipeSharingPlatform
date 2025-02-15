import { useState, useEffect } from "react";
import SideBar from "./UserSideBar/SideBar";

import AddRecipe from "./Forms/AddRecipe";
import RemoveRecipe from "./Forms/RemoveRecipe";
import AddToSavedRecipes from "./Forms/AddToSavedRecipes";
import RemoveSavedRecipe from "./Forms/RemoveSavedRecipe";
import AddComment from "./Forms/AddComment";
import RemoveComment from "./Forms/RemoveComment";
import RemoveAddedRecipe from "./Forms/RemoveAddedRecipe";
import SignOut from "./Forms/SignOut";

import userService from "../services/users";
import recipeService from "../services/recipes";
import adminService from "../services/admin";
import Dashboard from "./UserDashboard/Dashboard";
import commentService from "../services/comments";

const UserHomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAddAdmin, setOpenAddAdmin] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [openRemoveUser, setOpenRemoveUser] = useState(false);
  const [openAddRecipe, setOpenAddRecipe] = useState(false);
  const [openRemoveRecipe, setOpenRemoveRecipe] = useState(false);
  const [openAddComment, setOpenAddComment] = useState(false);
  const [openRemoveComment, setOpenRemoveComment] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);
  const [showAddedUser, setShowAddedUser] = useState("");
  const [showRemovedUser, setShowRemovedUser] = useState("");
  const [addedRecipe, setAddedRecipe] = useState("");
  const [removedRecipe, setRemovedRecipe] = useState("");
  const [user, setUser] = useState(null);
  const [showRecipes, setShowRecipes] = useState(false);
  const [dialogRecipe, setDialogRecipe] = useState(null);
  const [openAddToSavedRecipes, setOpenAddToSavedRecipes] = useState(false);
  const [openRemoveSavedRecipe, setOpenRemoveSavedRecipe] = useState(false);
  const [commentedOnRecipe, setCommentedOnRecipe] = useState({});
  const [showAllRecipes, setShowAllRecipes] = useState(true);
  const [showAddedRecipes, setShowAddedRecipes] = useState(false);
  const [openRemoveAddedRecipe, setOpenRemoveAddedRecipe] = useState(false);
  const [currentView, setCurrentView] = useState("all");

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
        setOpenAddToSavedRecipes={setOpenAddToSavedRecipes}
        setOpenRemoveSavedRecipe={setOpenRemoveSavedRecipe}
        setOpenRemoveAddedRecipe={setOpenRemoveAddedRecipe}
        setShowAddedRecipes={setShowAddedRecipes}
        setCurrentView={setCurrentView}
      />

      <AddToSavedRecipes
        open={openAddToSavedRecipes}
        setOpen={setOpenAddToSavedRecipes}
        userService={userService}
      />

      <RemoveSavedRecipe
        open={openRemoveSavedRecipe}
        setOpen={setOpenRemoveSavedRecipe}
        userService={userService}
      />
      <RemoveAddedRecipe
        open={openRemoveAddedRecipe}
        setOpen={setOpenRemoveAddedRecipe}
        userService={userService}
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
      <AddComment
        open={openAddComment}
        setOpen={setOpenAddComment}
        commentedRecipe={commentedOnRecipe}
      />

      <RemoveComment open={openRemoveComment} setOpen={setOpenRemoveComment} />
      <SignOut open={openSignOut} setOpen={setOpenSignOut} />

      <RemoveSavedRecipe
        open={openRemoveSavedRecipe}
        setOpen={setOpenRemoveSavedRecipe}
        userService={userService}
      />

      <Dashboard
        user={user}
        recipeService={recipeService}
        adminService={adminService}
        commentService={commentService}
        addedRecipe={addedRecipe}
        removedRecipe={removedRecipe}
        setShowRecipes={setShowRecipes}
        setDialogRecipe={setDialogRecipe}
        dialogRecipe={dialogRecipe}
        showRecipes={showRecipes}
        setOpenAddToSavedRecipes={setOpenAddToSavedRecipes}
        setOpenAddComment={setOpenAddComment}
        openAddComment={openAddComment}
        setCommentedOnRecipe={setCommentedOnRecipe}
        showAllRecipes={showAllRecipes}
        setShowAllRecipes={setShowAllRecipes}
        currentView={currentView}
      />
    </div>
  );
};

export default UserHomePage;
