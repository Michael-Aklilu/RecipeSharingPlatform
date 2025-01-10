import { FiCommand, FiSearch } from "react-icons/fi";
import { useState } from "react";
import AdminCommandMenu from "./AdminCommandMenu";
const AdminSearch = ({
  setOpenAddUser,
  setOpenRemoveUser,
  setOpenAddRecipe,
  setOpenRemoveRecipe,
  setOpenSignOut,
  setOpenAddAdmin,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-stone-200 relative rounded flex items-center px-2 py-1.5 text-lg mb-12">
        <FiSearch className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="w-full bg-transparent placeholder:text-gray-700 focus:outline-none"
        />

        <span className="p-1 text-md flex gap-0.5 items-center shadow bg-stone-200 rounded absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand />K
        </span>
      </div>

      <AdminCommandMenu
        open={open}
        setOpen={setOpen}
        setOpenAddUser={setOpenAddUser}
        setOpenRemoveUser={setOpenRemoveUser}
        setOpenAddRecipe={setOpenAddRecipe}
        setOpenRemoveRecipe={setOpenRemoveRecipe}
        setOpenSignOut={setOpenSignOut}
        setOpenAddAdmin={setOpenAddAdmin}
      />
    </>
  );
};

export default AdminSearch;
