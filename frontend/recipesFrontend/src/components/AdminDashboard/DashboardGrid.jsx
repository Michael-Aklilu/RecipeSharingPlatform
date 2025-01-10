import NumberCards from "./NumberCards";
import UsersList from "./UsersList";
import RecipesList from "./RecipesList";
import AdminList from "./AdminList";

const DashboardGrid = ({ userService, admin, recipeService, adminService }) => {
  return (
    <div className="px-4 grid gap-3 grid-cols-12">
      <NumberCards
        userService={userService}
        admin={admin}
        recipeService={recipeService}
        adminService={adminService}
      />
      <UsersList userService={userService} />
      <RecipesList recipeService={recipeService} />
      <AdminList adminService={adminService} />
    </div>
  );
};

export default DashboardGrid;
