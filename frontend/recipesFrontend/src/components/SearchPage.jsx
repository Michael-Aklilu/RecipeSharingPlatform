import Header from "./SearchPage/Header";
import { useState, useEffect, useRef } from "react";
import RecipeGridItem from "./SearchPage/RecipeGridItem";
import SideBar from "./SearchPage/SideBar";
import { SideBarProvider } from "../context/SideBar";
import recipeService from "../services/recipes";
import {
  ClockIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

export default function SearchPage() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);
  const [dialogRecipe, setDialogRecipe] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, [filteredRecipes]);

  const fetchRecipes = async () => {
    try {
      const dbRecipes = await recipeService.showAllRecipes();
      setRecipes(dbRecipes);
    } catch (error) {
      console.log("Error fetching recipes");
    }
  };

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
                          {dialogRecipe[0].ingredients.map(
                            (ingredient, index) => (
                              <li key={index} className="text-gray-700">
                                {ingredient}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-lg text-orange-800 mb-4">
                    Instructions
                  </h3>
                  <div className="prose text-gray-700 space-y-4">
                    {dialogRecipe[0].instructions}
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    onClick={() => setShowRecipes(false)}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full 
                            hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105
                            shadow-lg flex items-center"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col">
        <Header setFilteredRecipes={setFilteredRecipes} recipes={recipes} />
        <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
          <div className="bg-gray-700 h-screen border">
            <SideBar />
          </div>

          <div className="overflow-x-hidden px-8 pb-4">
            <div className="m-4">
              <h1 className="font-bold text-3xl text-center">Recipes</h1>
            </div>
            <div className="max-h-[80vh] overflow-y-auto">
              <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(300px,_1fr))] border bg-stone-200">
                {(filteredRecipes.length > 0 ? filteredRecipes : recipes).map(
                  (recipe) => (
                    <RecipeGridItem
                      setShowRecipes={setShowRecipes}
                      key={recipe.description}
                      recipes={recipe}
                      setDialogRecipe={setDialogRecipe}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideBarProvider>
  );
}
