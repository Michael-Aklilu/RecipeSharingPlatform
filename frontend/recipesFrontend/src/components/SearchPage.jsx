import Header from "./SearchPage/Header";
import { useState, useEffect } from "react";
import RecipeGridItem from "./SearchPage/RecipeGridItem";
import SideBar from "./SearchPage/SideBar";
import { SideBarProvider } from "../context/SideBar";
import recipeService from "../services/recipes";

export default function SearchPage() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false)

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
       { showRecipe && <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
         <div className="flex justify-center items-center bg-center border border-white">
          <div className="w-96 p-6 shadow-lg bg-stone-300 rounded-xl ">Hello 
         </div>
       </div>
      </div>}
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
                    <RecipeGridItem key={recipe.description} recipes={recipe} />
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
