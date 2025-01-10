import { useState, useEffect } from "react";

const NumberCards = ({ userService, admin, recipeService, adminService }) => {
  const [noOfUsers, setNumberOfUsers] = useState(0);
  const [noOfRecipes, setNumberOfRecipes] = useState(0);
  const [noOfAdmins, setNoOfAdmins] = useState(0);
  useEffect(() => {
    if (admin) {
      getUsers();
      getRecipes();
      getAllAdmins();
    }
  }, [admin]);

  const getUsers = async () => {
    await userService.setToken(admin.token);
    const users = await userService.getAllUsers();
    setNumberOfUsers(users.length);
  };

  const getRecipes = async () => {
    const recipes = await recipeService.showAllRecipes();
    setNumberOfRecipes(recipes.length);
  };

  const getAllAdmins = async () => {
    const admins = await adminService.getAdmins();
    setNoOfAdmins(admins.length);
  };

  return (
    <>
      <Card title="Users" value={noOfUsers} />
      <Card title="Recipes" value={noOfRecipes} />
      <Card title="Admins" value={noOfAdmins} />
    </>
  );
};

const Card = ({ title, value }) => {
  return (
    <div className="p-4 rounded bg-stone-300 col-span-4">
      <div className="flex mb-8 items-start justify-between">
        <div>
          <h3 className="text-stone-500 mb-2 text-lg">{title}</h3>
          <p className="text-3xl font-semibold text-center">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default NumberCards;
