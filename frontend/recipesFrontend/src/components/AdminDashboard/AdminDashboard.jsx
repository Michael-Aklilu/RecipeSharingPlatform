import TopBar from "./TopBar"
import DashboardGrid from "./DashboardGrid"
const AdminDashboard = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow h-[175vh]">
      <TopBar/>
      <DashboardGrid/>
    </div>
  )
}

export default AdminDashboard