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
    showRecipes,
    setOpenAddToSavedRecipes,
    setOpenAddComment,
    openAddComment,
    setCommentedOnRecipe,
    setShowAllRecipes,
    showAllRecipes,
    currentView,
    commentService
}) {
  return (
    <div className="bg-white rounded-lg pb-4 shadow h-full">
      <TopBar user={user} />
      <DashboardGrid setDialogRecipe={setDialogRecipe} setShowRecipes={setShowRecipes} dialogRecipe={dialogRecipe} showRecipes={showRecipes} setOpenAddToSavedRecipes={setOpenAddToSavedRecipes} setOpenAddComment={setOpenAddComment} openAddComment={openAddComment} setCommentedOnRecipe={setCommentedOnRecipe} setShowAllRecipes={setShowAllRecipes} showAllRecipes={showAllRecipes} currentView={currentView}/>
    </div>
  )
}
