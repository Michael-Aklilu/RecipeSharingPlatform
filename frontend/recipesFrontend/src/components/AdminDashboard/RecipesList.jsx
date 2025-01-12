import { useState, useEffect } from "react";
import { FiUser, FiMoreHorizontal } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
const RecipesList = ({ recipeService, addedRecipe }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  useEffect(() => {
    getRecipes();
  }, [addedRecipe]);

  const getRecipes = async () => {
    try {
      const adminJSON = window.localStorage.getItem("LoggedInAdmin");
      const admin = JSON.parse(adminJSON);
      await recipeService.setToken(admin.token);
      const allRecipes = await recipeService.showAllRecipes();
      setRecipes(allRecipes);
    } catch (error) {
      console.log("Error fetching recipes");
    }
  };
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300 mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium text-lg">
          <FaBook size={21} />
          Recipes List
        </h3>
      </div>
      <table className="w-full table-auto">
        <TableHead />

        <tbody>
          {recipes.map((recipe) => {
            return (
              <TableRow
                key={recipe.id}
                recipeID={recipe.id}
                userID={
                  recipe.RegisteredUser
                    ? recipe.RegisteredUser.id
                    : "Admin Owned"
                }
                recipeName={recipe.title}
                ownerName={
                  recipe.RegisteredUser
                    ? recipe.RegisteredUser.username
                    : "Admin Owned"
                }
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-lg font-normal text-stone-500">
        <th className="text-start p-1.5">Recipe ID</th>
        <th className="text-start p-1.5">Owner ID</th>
        <th className="text-start p-1.5">Name</th>
        <th className="text-start p-1.5">Owner username</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ recipeID, userID, recipeName, ownerName }) => {
  return (
    <tr className="bg-stone-300 text-lg text-gray-700 ">
      <td className="p-1.5">{recipeID}</td>
      <td className="p-1.5">{userID}</td>
      <td className="p-1.5">{recipeName}</td>
      <td className="p-1.5 ">{ownerName}</td>
      <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
        <FiMoreHorizontal />
      </button>
    </tr>
  );
};

export default RecipesList;
