import AdminAccount from "./AdminAccount";
import AdminSearch from "./AdminSearch";
import AdminRouteSelect from "./AdminRouteSelect";
import AdminSidebarFooter from "./AdminSidebarFooter";

const AdminSidebar = ({
  setIsOpen,
  isOpen,
  setOpenAddUser,
  setOpenRemoveUser,
  setOpenAddRecipe,
  setOpenRemoveRecipe,
  setOpenRemoveComment,
  setOpenSignOut,
  admin,
  setOpenAddAdmin,
}) => {
  return (
    <div className="bg-gray-700 rounded-lg">
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AdminAccount admin={admin} />
        <AdminSearch
          setOpenAddUser={setOpenAddUser}
          setOpenRemoveUser={setOpenRemoveUser}
          setOpenAddRecipe={setOpenAddRecipe}
          setOpenRemoveRecipe={setOpenRemoveRecipe}
          setOpenSignOut={setOpenSignOut}
          setOpenAddAdmin={setOpenAddAdmin}
        />
        <AdminRouteSelect
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setOpenAddUser={setOpenAddUser}
          setOpenRemoveUser={setOpenRemoveUser}
          setOpenAddRecipe={setOpenAddRecipe}
          setOpenRemoveRecipe={setOpenRemoveRecipe}
          setOpenRemoveComment={setOpenRemoveComment}
          setOpenSignOut={setOpenSignOut}
        />
      </div>
      <AdminSidebarFooter />
    </div>
  );
};

export default AdminSidebar;
