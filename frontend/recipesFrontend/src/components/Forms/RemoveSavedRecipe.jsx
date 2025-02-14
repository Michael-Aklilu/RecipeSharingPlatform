import { useState } from "react";
import { FaBan } from "react-icons/fa";
import Notification from "../Notifications/Notification";

export default function RemoveSavedRecipe({ open, setOpen, userService }) {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const user = JSON.parse(window.localStorage.getItem("LoggedInUser"));
  if (!open) return null;

  const handleInput = async (event) => {
    event.preventDefault();

    try {
      const users = await userService.getAllUsers();
      const myUser = users.find((u) => u.username === user.username);

      const recipeToRemove = myUser.savedRecipes.find(
        (recipe) =>{
          return recipe.title === title
        } 
      );

      if (!recipeToRemove) {
        setError("Recipe not found in saved recipes");
        return;
      }
  
      await userService.removeUserSavedRecipe(myUser.id, recipeToRemove.id);

      setTitle("");
      setOpen(false);
      window.location.reload();
    } catch (error) {
      setError(error.message || "Failed to remove recipe");
    }
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
      <form
        className="w-full max-w-3xl bg-gray-700 rounded-xl shadow-lg overflow-hidden"
        onSubmit={handleInput}
      >
        <div className="text-white p-6 md:p-8 flex flex-col space-y-4 border border-white bg-gray-700 rounded-xl max-h-[80vh] overflow-y-auto">
          <h1 className="text-2xl md:text-3xl flex justify-center font-semibold text-white gap-2">
            <FaBan />
            Remove saved recipe
          </h1>
          <hr className="border border-white" />
          <label htmlFor="title" className="text-lg md:text-xl">
            Title:
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter title ..."
            />
          </label>
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
