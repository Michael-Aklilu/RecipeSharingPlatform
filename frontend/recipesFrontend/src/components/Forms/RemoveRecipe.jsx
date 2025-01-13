import { FaBan } from "react-icons/fa";
import { useState } from "react";
import Notification from "../Notifications/Notification";

export default function RemoveRecipe({ open, setOpen, recipeService, setRemovedRecipe }) {
  const [error, setError] = useState("");
  const admin = JSON.parse(window.localStorage.getItem("LoggedInAdmin"));
  if (!open) return null;

  const handleInput = (event) => {
    event.preventDefault();
    if (event.target.title.value === "") {
      setError("");
      setTimeout(() => setError("Title is missing"), 0);
      return;
    }
    if (event.target.id.value === "") {
      setError("");
      setTimeout(() => setError("ID is missing"), 0);
      return;
    }
    if (admin) {
      adminRemoveRecipe(event.target.id.value);
      event.target.id.value = "";
      event.target.title.value = "";
      setError("");
      setOpen(false);
    }
  };

  const adminRemoveRecipe = async (id) => {
    recipeService.setToken(admin.token);
    
    try {
      const recipes = await recipeService.showAllRecipes();
      const recipeToRemove = recipes.find((r) => r.id === id);
      await recipeService.deleteRecipe(recipeToRemove.id)
      setRemovedRecipe(recipeToRemove)
      
    } catch (error) {
      console.log("Error removing recipe");
      console.log(error);
    }
  };

  return (
    <div className="fixed top-1/4 left-1/4 translate-x-1/2  p-3  bg-gray-700 rounded">
      <div className="flex justify-center items-center bg-center border border-white">
        <div className="w-96 p-6 shadow-lg bg-gray-700 rounded-md ">
          <form onSubmit={handleInput}>
            <h1 className=" flex text-3xl justify-center gap-2 text-center font-semibold text-white ">
              <FaBan /> Remove Recipe
            </h1>
            <hr className="mt-3" />

            <div className="mt-3">
              <label
                htmlFor="recipe"
                className="text-white block text-base mb-2"
              >
                Recipe title
              </label>

              <input
                type="text"
                name="title"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 "
                placeholder="Enter recipe title..."
              />

              <label
                htmlFor="username"
                className="block text-base mb-2 mt-2 text-white"
              >
                Recipe ID
              </label>
              <input
                type="text"
                name="id"
                className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                placeholder="Enter the ID of the recipe ..."
              />
            </div>

            <Notification error={error} setError={setError} />

            <div className="mt-5 flex justify-evenly">
              <button
                onClick={() => setOpen(false)}
                className="border-2 border-white-600  bg-white text-gray-700 p-2 h-1/2 rounded-md"
              >
                Close
              </button>
              <button
                type="submit"
                className="border-2 border-white-600  bg-white text-gray-700 p-2 h-1/2 rounded-md"
              >
                Remove
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
