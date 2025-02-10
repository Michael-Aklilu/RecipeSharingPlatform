import { FiHome, FiLogOut } from "react-icons/fi";
import {
  FaUserMinus,
  FaUserPlus,
  FaPizzaSlice,
  FaBan,
  FaPlus,
} from "react-icons/fa";

export default function RouteSelect({
  setIsOpen,
  isOpen,
  setOpenAddUser,
  setOpenRemoveUser,
  setOpenAddRecipe,
  setOpenRemoveRecipe,
  setOpenSignOut,

}) {
  return (
    <div className="space-y-8 text-white">
      <Route icon={FiHome} title="Dashboard" />
     
      <Route
        icon={FaPizzaSlice}
        title="Add Recipe"
        onClick={() => setOpenAddRecipe(true)}
      />
      <Route
        icon={FaBan}
        title="Remove Recipe"
        onClick={() => setOpenRemoveRecipe(true)}
      />
      <Route icon={FaPlus} title="Add Comment" />
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
