import Header from "./HomePage/Header";
import Categories from "./HomePage/Categories";
import { categoryList, recipes } from "../fakeData/home";
import { useState } from "react";
import RecipeGridItem from "./HomePage/RecipeGridItem";
import SideBar from "./HomePage/SideBar";

export default function Recipes() {
  const [selectedCategory, setSelectedCategory] = useState(categoryList[0]);
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <div className="bg-gray-700">
          <SideBar/>
        </div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 bg-white pb-4 z-10">
            <Categories
              categories={categoryList}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="m-4">
            <h1 className="font-bold text-3xl text-center">Recipes</h1>
          </div>
          <div className="max-h-[80vh] overflow-y-auto">
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] grid-rows-[repeat(auto-fill,_minmax(300px,_1fr))]">
            
            {recipes.map((recipe) => {
              return (
                <RecipeGridItem key={recipe.description} recipes={recipe} />
              );
            })}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
