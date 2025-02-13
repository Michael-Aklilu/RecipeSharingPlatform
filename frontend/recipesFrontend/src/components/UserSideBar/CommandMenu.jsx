import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { FiLogOut } from "react-icons/fi";
import { FaUserMinus, FaPlus, FaPizzaSlice, FaBan } from "react-icons/fa";

export default function CommandMenu({
  open,
  setOpen,
  setOpenAddUser,
  setOpenRemoveUser,
  setOpenAddRecipe,
  setOpenRemoveRecipe,
  setOpenSignOut,
  setOpenAddAdmin,
  setCurrentView,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-gray-950/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-stone-200 rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12 "
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What are you looking for?"
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-stone-950">"{value}"</span>
          </Command.Empty>

          <Command.Group
            heading="Content"
            className="text-lg mb-3 text-stone-700 "
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-lg text-stone-950 hover:bg-white rounded items-centergap-2">
              <FaPizzaSlice size={21} />
              <span
                className="ml-1"
                onClick={() => {
                  setOpenAddRecipe(true);
                  setOpen(false);
                }}
              >
                Add recipe
              </span>
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Sign out"
            className="text-lg mb-3 text-stone-700"
          >
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-lg text-stone-950 hover:bg-white rounded items-centergap-2">
              <FiLogOut size={21} />
              <span
                className="ml-1"
                onClick={() => {
                  setOpenSignOut(true);
                  setOpen(false);
                }}
              >
                Sign Out
              </span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
}
