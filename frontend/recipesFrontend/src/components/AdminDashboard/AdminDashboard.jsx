import TopBar from "./TopBar";
import DashboardGrid from "./DashboardGrid";
const AdminDashboard = ({
  admin,
  userService,
  recipeService,
  adminService,
  addedUser,
  setAddedUser
}) => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow h-[175vh]">
      <TopBar admin={admin} />
      <DashboardGrid
        userService={userService}
        admin={admin}
        recipeService={recipeService}
        adminService={adminService}
      />
    </div>
  );
};

export default AdminDashboard;
