import Search from "./Search";
import Account from "./Account";
import RouteSelect from "./RouteSelect";
import SideBarFooter from "./SideBarFooter";

export default function SideBar({
  setIsOpen,
  isOpen,
  setOpenAddUser,
  setOpenRemoveUser,
  setOpenAddRecipe,
  setOpenRemoveRecipe,
  setOpenRemoveComment,
  setOpenSignOut,
  user,
  setOpenAddAdmin,
  setOpenAddToSavedRecipes,
  setOpenRemoveSavedRecipe,
  setShowAddedRecipes,
  setCurrentView
}) {
  return (
    <div className="bg-gray-700 rounded-lg ">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)] ">
        <Account user={user} />
        <Search
          setOpenAddUser={setOpenAddUser}
          setOpenRemoveUser={setOpenRemoveUser}
          setOpenAddRecipe={setOpenAddRecipe}
          setOpenRemoveRecipe={setOpenRemoveRecipe}
          setOpenSignOut={setOpenSignOut}
          setOpenAddAdmin={setOpenAddAdmin}
          setCurrentView={setCurrentView}
        />
        <RouteSelect
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setOpenAddUser={setOpenAddUser}
          setOpenRemoveUser={setOpenRemoveUser}
          setOpenAddRecipe={setOpenAddRecipe}
          setOpenRemoveRecipe={setOpenRemoveRecipe}
          setOpenRemoveComment={setOpenRemoveComment}
          setOpenSignOut={setOpenSignOut}
          setOpenAddToSavedRecipes={setOpenAddToSavedRecipes}
          setOpenRemoveSavedRecipe={setOpenRemoveSavedRecipe}
          setShowAddedRecipes={setShowAddedRecipes}
          setCurrentView={setCurrentView}
          
        />
      </div>
      <SideBarFooter />
    </div>
  );
}
