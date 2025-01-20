import { recipes } from "../../fakeData/home";
import RecipeGridItem from "../HomePage/RecipeGridItem";

export default function DashboardGrid() {
  return (
    <div className="max-h-[80vh] overflow-y-auto">
      <h1 className="font-bold text-3xl text-center mb-5">My Recipes</h1>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(300px,_1fr))] border bg-stone-200">
        {recipes.map((recipe) => {
          return <RecipeGridItem key={recipe.description} recipes={recipe} />;
        })}
      </div>
    </div>
  );
}
