import { useState } from "react";
import recipeService from "../../services/recipes";
export default function RecipeGridItem({ recipes, setShowRecipes, setDialogRecipe }) {
  const [searchedRecipe, setSearchedRecipe] = useState([]);
  const handleClick = async (event) => {
    const value = event.target.dataset.title;
    setSearchedRecipe(value);
    const recipes = await recipeService.showAllRecipes();
    setShowRecipes(true)
    const recipeToShow = recipes.filter((recipe) => {
      return recipe.title === value;
    });
    await setDialogRecipe(recipeToShow)
  };
  return (
    <div
      className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:scale-105 duration-300 "
      onClick={handleClick}
    >
      <img
        src={recipes.imageUrl}
        className="w-full h-48 object-cover rounded-xl"
        data-title={recipes.title}
      />
      <div className="flex flex-col space-y-2">
        <a className="font-bold text-lg" data-title={recipes.title}>
          {recipes.title}
        </a>
        <a className="text-secondary-text " data-title={recipes.title}>
          {recipes.description}
        </a>
      </div>
    </div>
  );
}
