import TopBar from "./TopBar"

export default function Dashboard({
    user,
    userService,
    recipeService,
    adminService,
    addedRecipe,
    removedRecipe,
}) {
  return (
    <div className="bg-white rounded-lg pb-4 shadow h-[175vh]">
      <TopBar user={user} />
     
    </div>
  )
}
