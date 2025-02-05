import TopBar from "./TopBar"
import DashboardGrid from "./DashboardGrid"

export default function Dashboard({
    user,
    userService,
    recipeService,
    adminService,
    addedRecipe,
    removedRecipe,
}) {
  return (
    <div className="bg-white rounded-lg pb-4 shadow h-full">
      <TopBar user={user} />
      <DashboardGrid/>
    </div>
  )
}
