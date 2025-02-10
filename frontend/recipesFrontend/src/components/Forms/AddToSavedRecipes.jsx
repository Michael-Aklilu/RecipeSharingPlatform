import { useState } from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import Notification from "../Notifications/Notification";

export default function AddToSavedRecipes({ open, setOpen, userService }) {
  const [error, setError] = useState("");
  const [myUser, setMyUser] = useState(null);
  const user = JSON.parse(window.localStorage.getItem("LoggedInUser"));
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
      <form className="w-full max-w-3xl bg-gray-700 rounded-xl shadow-lg overflow-hidden">
        <div className="text-white p-6 md:p-8 flex flex-col space-y-4 border border-white bg-gray-700 rounded-xl max-h-[80vh] overflow-y-auto">
          <h1 className="text-2xl md:text-3xl flex justify-center font-semibold text-white gap-2">
            <HiOutlineBookOpen />
            Add to saved recipes
          </h1>
          <hr className="border border-white" />
         
          <Notification error={error} setError={setError} />
          <div className="mt-5 flex justify-evenly">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
