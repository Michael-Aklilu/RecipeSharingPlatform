import AdminAccountToggle from "./AdminAccount"
import AdminSearch from "../AdminSearch"
import AdminRouteSelect from "./AdminRouteSelect"
import AdminSidebarFooter from "./AdminSidebarFooter"


const AdminSidebar = () => {
  return (
    <div className="bg-gray-700 rounded-lg">
        <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
          <AdminAccountToggle/>
          <AdminSearch/>
          <AdminRouteSelect/>
        </div>
        <AdminSidebarFooter/>
    </div>
  )
}

export default AdminSidebar