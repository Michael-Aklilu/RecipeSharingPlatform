import { HiOutlineBookOpen } from "react-icons/hi";
import { useState } from "react";
import Notification from "../Notifications/Notification";

export default function AddRecipe({
  open,
  setOpen,
  recipeService,
  userService,
  setAddedRecipe
}) {
  const [error, setError] = useState("");
  const admin = JSON.parse(window.localStorage.getItem("LoggedInAdmin"));
  const user = JSON.parse(window.localStorage.getItem("LoggedInUser"));
  if (!open) return null;

  const handleInput = async (event) => {
    event.preventDefault();
    if ((event.target.title.value === "")) {
      setError("Title is missing");
      return;
    }
    if ((event.target.description.value === "")) {
      setError("Description is missing");
      return;
    }
    if ((event.target.ingredients.value === "")) {
      setError("Ingredients are missing");
      return;
    }
    if ((event.target.instructions.value === "")) {
      setError("Instructions are missing");
      return;
    }
    if ((event.target.servings.value === "")) {
      setError("Servings are missing");
      return;
    }
    if ((event.target.prepTime.value === "")) {
      setError("Prep time is missing");
      return;
    }
    if ((event.target.cookTime.value === "")) {
      setError("Cook time is missing");
      return;
    }
    const newRecipeByAdmin = {
      title: event.target.title.value,
      description: event.target.description.value,
      ingredients: event.target.instructions.value,
      instructions: event.target.title.value,
      servings: event.target.servings.value,
      prepTime: event.target.prepTime.value,
      cookTime: event.target.cookTime.value,
      imageUrl: event.target.imageUrl.value,
    };
    if (admin) {
      adminAddRecipe(newRecipeByAdmin);
      event.target.title.value = "";
      event.target.description.value = "";
      event.target.instructions.value = "";
      event.target.title.value = "";
      event.target.servings.value = "";
      event.target.prepTime.value = "";
      event.target.cookTime.value = "";
      event.target.imageUrl.value = "";
    }
  };

  const adminAddRecipe = async (recipe) => {
    recipeService.setToken(admin.token);
    try {
      await recipeService.addRecipe(recipe);
      setError("");
      setOpen(false);
      setAddedRecipe(recipe)
    } catch (error) {
      console.log("Error adding recipe");
      console.log(error);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 p-4 w-screen border flex justify-center items-center ">
      <form onSubmit={handleInput} className="w-1/2 max-w-5xl">
        <div className="text-white p-6 md:p-8 flex flex-col space-y-2  space-x-4  border border-white bg-gray-700 rounded-xl max-h-[60vh] overflow-y-auto">
          <h1 className="text-3xl flex justify-center font-semibold text-white gap-2 ">
            <HiOutlineBookOpen />
            Add Recipe
          </h1>
          <hr className="border border-white" />
          <label htmlFor="title" className="text-xl ">
            Title:{" "}
            <input
              type="text"
              name="title"
              className="mt-5 rounded text-xl text-black p-2 ml-20"
              placeholder="Enter title ..."
            />
          </label>
          <label htmlFor="description" className="flex gap-5 text-xl">
            Description:{" "}
            <textarea
              name="description"
              className=" text-black text-xl p-2 w-1/2 rounded"
              placeholder="Enter description ..."
            ></textarea>
          </label>
          <label htmlFor="ingredients" className="flex gap-5 text-xl">
            Ingredients:{" "}
            <textarea
              name="ingredients"
              className=" text-black text-xl p-2 w-1/2 rounded"
              placeholder="Enter one ingredient per line (e.g., 1 cup sugar, 2 eggs)"
            ></textarea>
          </label>
          <label htmlFor="instructions" className="flex gap-5 text-xl">
            Instructions:{" "}
            <textarea
              name="instructions"
              className=" text-black text-xl p-2 w-1/2 rounded"
              placeholder="Enter one instruction per line (e.g., Boil water, Pre-heat oven)"
            ></textarea>
          </label>
          <label htmlFor="servings" className="text-xl">
            Servings:{" "}
            <input
              type="text"
              name="servings"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 ml-10"
              placeholder="Enter the number of servings ..."
            />
          </label>
          <label htmlFor="prep-time" className="text-xl ">
            Prep time:{" "}
            <input
              type="text"
              name="prepTime"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 m-8"
              placeholder="Enter the prep time ..."
            />
          </label>
          <label htmlFor="Cook time" className="text-xl ">
            Cook time:
            <input
              type="text"
              name="cookTime"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 m-8"
              placeholder="Enter the cook time ..."
            />
          </label>
          <label htmlFor="Cook time" className="text-xl ">
            Image url:{" "}
            <input
              type="text"
              name="imageUrl"
              className="mt-5 rounded text-xl text-black p-2 w-1/2 m-8"
              placeholder="Optional image url ..."
            />
          </label>

          <Notification error={error} setError={setError} />

          <div className="mt-5 flex justify-evenly">
            <button
              onClick={() => setOpen(false)}
              className="border-2 border-white-600  bg-white text-gray-700  p-2 w-1/4 rounded-md"
            >
              Close
            </button>
            <button
              type="submit"
              className="border-2 border-white-600 w-1/4  bg-white text-gray-700 p-2 rounded-md"
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
