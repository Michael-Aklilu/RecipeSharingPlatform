import Header from "./SearchPage/Header";
import { useState, useEffect, useRef } from "react";
import RecipeGridItem from "./SearchPage/RecipeGridItem";
import SideBar from "./SearchPage/SideBar";
import { SideBarProvider } from "../context/SideBar";
import recipeService from "../services/recipes";

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
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 p-4">
          { dialogRecipe && <div className="flexjustify-center items-center bg-center border border-white">
            <div className="w-[35vw] h-[50vh] p-6 shadow-lg bg-stone-200 rounded-xl overflow-y-auto">
              <div className="font-bold text-xl text-center mb-2">{dialogRecipe[0].title}</div>
              <div className="flex gap-3 flex-col">
                <div className="flex justify-center">
                  <img className=" rounded-lg h-[20vh] w-1/3 " src={`${dialogRecipe[0].imageUrl}`}/>
                </div>
                <div className="font-bold text-lg ">Instructions</div>
                <div>{`${dialogRecipe[0].instructions}`}</div>
              </div>
             

              <div className="mt-5 flex justify-evenly">
                <button
                  onClick={() => setShowRecipes(false)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>}
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
