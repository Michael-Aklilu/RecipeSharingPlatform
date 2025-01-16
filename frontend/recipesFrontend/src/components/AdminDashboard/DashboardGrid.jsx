import NumberCards from "./NumberCards";
import UsersList from "./UsersList";
import RecipesList from "./RecipesList";
import AdminList from "./AdminList";

const DashboardGrid = ({
  userService,
  admin,
  recipeService,
  adminService,
  showAddedUser,
  showRemovedUser,
  addedRecipe,
  removedRecipe,
}) => {
  return (
    <div className="px-4 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 w-full">
      <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-3 w-fu">
        <NumberCards
          userService={userService}
          admin={admin}
          recipeService={recipeService}
          adminService={adminService}
        />
      </div>

      <UsersList
        userService={userService}
        showAddedUser={showAddedUser}
        showRemovedUser={showRemovedUser}
      />

      <RecipesList
        recipeService={recipeService}
        addedRecipe={addedRecipe}
        removedRecipe={removedRecipe}
      />

      <AdminList adminService={adminService} />
    </div>
  );
};

export default DashboardGrid;
