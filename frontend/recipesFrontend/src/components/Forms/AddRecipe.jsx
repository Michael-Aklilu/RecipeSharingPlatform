import { HiOutlineBookOpen } from "react-icons/hi";
import { useState, useRef } from "react";
import Notification from "../Notifications/Notification";

export default function AddRecipe({
  open,
  setOpen,
  recipeService,
  userService,
  setAddedRecipe,
}) {
  const [error, setError] = useState("");
  const [myUser, setMyUser] = useState(null);
  const admin = JSON.parse(window.localStorage.getItem("LoggedInAdmin"));
  const user = JSON.parse(window.localStorage.getItem("LoggedInUser"));
  const fetchUserCalled = useRef(false);
  if (!open) return null;

  const fetchUser = async () => {
    try {
      const users = await userService.getAllUsers();
      const addingUser = users.find((u) => u.name === user.name);

      setMyUser(addingUser);
    } catch (error) {
      console.log("Error fetching users");
    }
  };

  const handleFetchUser = () => {
    if (!fetchUserCalled.current && user) {
      fetchUser(); 
      fetchUserCalled.current = true; 
    }
  };

  handleFetchUser();

  const handleInput = async (event) => {
    event.preventDefault();
    if (event.target.title.value === "") {
      setError("");
      setTimeout(() => setError("Title is missing"), 0);
      return;
    }
    if (event.target.description.value === "") {
      setError("");
      setTimeout(() => setError("Description is missing"), 0);
      return;
    }
    if (event.target.ingredients.value === "") {
      setError("");
      setTimeout(() => setError("Ingredients are missing"), 0);
      return;
    }
    if (event.target.instructions.value === "") {
      setError("");
      setTimeout(() => setError("Instructions are missing"), 0);
      return;
    }
    if (event.target.servings.value === "") {
      setError("");
      setTimeout(() => setError("Servings are missing"), 0);
      return;
    }
    if (event.target.prepTime.value === "") {
      setError("");
      setTimeout(() => setError("Prep time is missing"), 0);
      return;
    }
    if (event.target.cookTime.value === "") {
      setError("");
      setTimeout(() => setError("Cook time is missing"), 0);
      return;
    }
    const newRecipeByAdmin = {
      title: event.target.title.value,
      description: event.target.description.value,
      ingredients: event.target.ingredients.value,
      instructions: event.target.instructions.value,
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

    const newRecipeByUser = {
      title: event.target.title.value,
      description: event.target.description.value,
      ingredients: event.target.ingredients.value,
      instructions: event.target.instructions.value,
      servings: event.target.servings.value,
      prepTime: event.target.prepTime.value,
      cookTime: event.target.cookTime.value,
      imageUrl: event.target.imageUrl.value,
      RegisteredUser: myUser.id,
    };
    if (user) {
      userAddRecipe(newRecipeByUser);
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
      setAddedRecipe(recipe);
    } catch (error) {
      console.log("Error adding recipe");
    }
  };
  const userAddRecipe = async (recipe) => {
    recipeService.setToken(user.token);
    try {
      await recipeService.addRecipe(recipe);
      setError("");
      setOpen(false);
      setAddedRecipe(recipe);
    } catch (error) {
      console.log("Error adding recipe");
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
      <form
        onSubmit={handleInput}
        className="w-full max-w-3xl bg-gray-700 rounded-xl shadow-lg overflow-hidden"
      >
        <div className="text-white p-6 md:p-8 flex flex-col space-y-4 border border-white bg-gray-700 rounded-xl max-h-[80vh] overflow-y-auto">
          <h1 className="text-2xl md:text-3xl flex justify-center font-semibold text-white gap-2">
            <HiOutlineBookOpen />
            Add Recipe
          </h1>
          <hr className="border border-white" />
          <label htmlFor="title" className="text-lg md:text-xl">
            Title:
            <input
              type="text"
              name="title"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter title ..."
            />
          </label>
          <label htmlFor="description" className="text-lg md:text-xl">
            Description:
            <textarea
              name="description"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter description ..."
            ></textarea>
          </label>
          <label htmlFor="ingredients" className="text-lg md:text-xl">
            Ingredients:
            <textarea
              name="ingredients"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter one ingredient per line (e.g., 1 cup sugar, 2 eggs)"
            ></textarea>
          </label>
          <label htmlFor="instructions" className="text-lg md:text-xl">
            Instructions:
            <textarea
              name="instructions"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter one instruction per line (e.g., Boil water, Pre-heat oven)"
            ></textarea>
          </label>
          <label htmlFor="servings" className="text-lg md:text-xl">
            Servings:
            <input
              type="text"
              name="servings"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter the number of servings ..."
            />
          </label>
          <label htmlFor="prep-time" className="text-lg md:text-xl">
            Prep Time:
            <input
              type="text"
              name="prepTime"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter the prep time ..."
            />
          </label>
          <label htmlFor="cook-time" className="text-lg md:text-xl">
            Cook Time:
            <input
              type="text"
              name="cookTime"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Enter the cook time ..."
            />
          </label>
          <label htmlFor="imageUrl" className="text-lg md:text-xl">
            Image URL:
            <input
              type="text"
              name="imageUrl"
              className="block w-full mt-2 p-2 rounded text-black text-lg"
              placeholder="Optional image URL ..."
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
