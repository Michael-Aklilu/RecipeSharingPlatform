import AdminDashboard from "./AdminDashboard/AdminDashboard"
import AdminSidebar from "./AdminSidebar/AdminSidebar"

const AdminHomePage = () => {
  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,1fr] bg-stone-200">
      <AdminSidebar/>
      <AdminDashboard/>
    </div>
  )
}

export default AdminHomePage