import RecipeGridItem from "../SearchPage/RecipeGridItem";
import recipeService from "../../services/recipes";
import userService from "../../services/users";

import { useState, useEffect } from "react";
import { SideBarProvider } from "../../context/SideBar";
import { ClockIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export default function DashboardGrid({
  setDialogRecipe,
  setShowRecipes,
  dialogRecipe,
  showRecipes,
  setOpenAddToSavedRecipes,
}) {
  const [myRecipes, setMyRecipes] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("LoggedInUser"));
  recipeService.setToken(user.token);
  userService.setToken(user.token);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const dbRecipes = await recipeService.showAllRecipes();

      const users = await userService.getAllUsers();
      const myUser = users.find((u) => u.name === user.name);

      const myDbRecipes = dbRecipes.filter((recipe) => {
        return recipe.RegisteredUser.id === myUser.id;
      });
      setMyRecipes(myDbRecipes);
    } catch (error) {
      console.log("Error fetching recipes");
    }
  };

  const addToSavedRecipes = () =>{

  }

  return (
    <SideBarProvider>
      {showRecipes && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4 z-50">
          {dialogRecipe && (
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 overflow-hidden">
              <div className="p-8 overflow-y-auto h-[70vh]">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-3xl font-bold text-gray-800 ">
                    {dialogRecipe[0].title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <img
                    src={dialogRecipe[0].imageUrl}
                    alt={dialogRecipe[0].title}
                    className="w-full  object-cover rounded-lg shadow-md"
                  />
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-lg text-blue-800 mb-2">
                        Recipe Details
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div className="flex items-center">
                          <ClockIcon className="w-5 h-5 mr-2 text-blue-600" />
                          {dialogRecipe[0].cookTime}
                        </div>
                        <div className="flex items-center">
                          <UserGroupIcon className="w-5 h-5 mr-2 text-blue-600" />
                          {dialogRecipe[0].servings} servings
                        </div>
                      </div>
                    </div>
                    {dialogRecipe[0].ingredients && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-lg text-green-800 mb-2">
                          Ingredients
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {dialogRecipe[0].ingredients[0]
                            .split("\n")
                            .map((ingredient, index) => (
                              <li key={index} className="text-gray-700">
                                {ingredient}
                              </li>
                            ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-lg text-orange-800 mb-4">
                    Instructions
                  </h3>
                  <ul className="prose text-gray-700 space-y-4">
                    {dialogRecipe[0].instructions[0]
                      .split("\n")
                      .map((i, index) => (
                        <li key={index}>
                          {index + 1}.{i}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="flex justify-center gap-4">
                  {user && (
                    <>
                      <button
                        className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full 
                   hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105
                   shadow-lg flex items-center"
                        onClick={() => {
                          setOpenAddToSavedRecipes(true);
                          setShowRecipes(false);
                        }}
                      >
                        Add to saved Recipes
                      </button>
                      <button
                        className="px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-full 
                   hover:from-purple-700 hover:to-purple-600 transition-all transform hover:scale-105
                   shadow-lg flex items-center"
                      >
                        Add Comment
                      </button>
                      <button
                        onClick={() => setShowRecipes(false)}
                        className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full 
                            hover:from-red-700 hover:to-red-600 transition-all transform hover:scale-105
                            shadow-lg flex items-center"
                      >
                        Close
                      </button>
                    </>
                  )}
                </div>

                <div className="flex justify-center"></div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="max-h-[80vh] overflow-y-auto">
        <h1 className="font-bold text-3xl text-center mb-5">My Recipes</h1>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(300px,_1fr))] border bg-stone-200">
          {myRecipes.map((recipe) => {
            return (
              <RecipeGridItem
                key={recipe.description}
                recipes={recipe}
                setShowRecipes={setShowRecipes}
                setDialogRecipe={setDialogRecipe}
              />
            );
          })}
        </div>
      </div>
    </SideBarProvider>
  );
}
