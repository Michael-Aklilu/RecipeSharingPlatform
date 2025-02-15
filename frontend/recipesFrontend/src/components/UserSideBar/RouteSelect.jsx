import { FiHome, FiLogOut } from "react-icons/fi";
import {
  FaUserMinus,
  FaUserPlus,
  FaPizzaSlice,
  FaBan,
  FaPlus,
  FaBookmark,
  FaMinus
} from "react-icons/fa";

export default function RouteSelect({
  setIsOpen,
  isOpen,
  setOpenAddUser,
  setOpenRemoveUser,
  setOpenAddRecipe,
  setOpenRemoveRecipe,
  setOpenSignOut,
  setShowAddedRecipes,
  setCurrentView,
  setOpenRemoveSavedRecipe,
  setOpenRemoveAddedRecipe
}) {
  return (
    <div className="space-y-8 text-white">
      <Route
        icon={FiHome}
        title="Dashboard"
        onClick={() => setCurrentView("all")}
      />

      <Route
        icon={FaPizzaSlice}
        title="Add Recipe"
        onClick={() => setOpenAddRecipe(true)}
      />
      
      <Route
        icon={FaPlus}
        title="Added recipes"
        onClick={() => setCurrentView("added")}
      />
      <Route
        icon={FaMinus}
        title="Remove added recipe"
        onClick={() => setOpenRemoveAddedRecipe(true)}
      />
      <Route
        icon={FaBookmark}
        title="Saved recipes"
        onClick={() => setCurrentView("saved")}
      />
      <Route
        icon={FaBan}
        title="Unsave recipe"
        onClick={() => setOpenRemoveSavedRecipe(true)}
      />
      <Route
        icon={FiLogOut}
        title="Sign out"
        onClick={() => setOpenSignOut(true)}
      />
    </div>
  );
}

const Route = ({ icon: Icon, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5  transition-[box-shadow,_background-color,_color] hover:bg-stone-300 bg-transparent shadow-none text-md`}
    >
      <Icon />
      <span>{title}</span>
    </button>
  );
};
