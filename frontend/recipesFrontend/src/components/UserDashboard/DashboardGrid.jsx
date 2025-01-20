import { recipes } from "../../fakeData/home";
import RecipeGridItem from "../HomePage/RecipeGridItem";
import recipeService from "../../services/recipes";
import userService from "../../services/users";
import { useState, useEffect } from "react";

export default function DashboardGrid() {
  const [myRecipes, setMyRecipes] = useState([]);
  const user = JSON.parse(window.localStorage.getItem("LoggedInUser"));
  recipeService.setToken(user.token);
  userService.setToken(user.token);

  useEffect(() => {
    fetchRecipes();
  }, [myRecipes]);

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
  return (
    <div className="max-h-[80vh] overflow-y-auto">
      <h1 className="font-bold text-3xl text-center mb-5">My Recipes</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(300px,_1fr))] border bg-stone-200">
        {myRecipes.map((recipe) => {
          return <RecipeGridItem key={recipe.description} recipes={recipe} />;
        })}
      </div>
    </div>
  );
}
