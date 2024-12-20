import NumberCards from "./NumberCards"
import UsersList from "./UsersList"
import RecipesList from "./RecipesList"
import AdminList from "./AdminList"


const DashboardGrid = () => {
    return (
        <div className="px-4 grid gap-3 grid-cols-12">
            <NumberCards />
            <UsersList />
            <RecipesList/>
            <AdminList/>

        </div>
    )
}



export default DashboardGrid