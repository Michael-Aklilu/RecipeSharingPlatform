import TopBar from "./TopBar"
import DashboardGrid from "./DashboardGrid"

export default function Dashboard({
    user,
    userService,
    recipeService,
    adminService,
    addedRecipe,
    removedRecipe,
    setShowRecipes,
    setDialogRecipe,
    dialogRecipe,
    showRecipes
}) {
  return (
    <div className="bg-white rounded-lg pb-4 shadow h-full">
      <TopBar user={user} />
      <DashboardGrid setDialogRecipe={setDialogRecipe} setShowRecipes={setShowRecipes} dialogRecipe={dialogRecipe} showRecipes={showRecipes}/>
    </div>
  )
}
