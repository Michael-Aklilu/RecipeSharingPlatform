
import { FiHome,FiLogOut } from 'react-icons/fi'
import { FaUserMinus, FaUserPlus, FaPizzaSlice, FaBan, FaTrash } from 'react-icons/fa'
const AdminRouteSelect = () => {
    return (
        <div className="space-y-4 text-white">
            <Route icon={FiHome} selected={true} title='Dashboard'/>
            <Route icon={FaUserPlus} selected={false} title='Add User'/>
            <Route icon={FaUserMinus} selected={false} title='Remove User'/>
            <Route icon={FaPizzaSlice} selected={false} title='Add Recipe'/>
            <Route icon={FaBan} selected={false} title='Remove Recipe'/>
            <Route icon={FaTrash} selected={false} title='Remove Comment'/>
            <Route icon={FiLogOut} selected={false} title='Sign out'/>


        </div>
    )
}

const Route = ({selected,icon: Icon,title}) => {
    return (
        <button 
        className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${selected ? 'bg-stone-300 text-gray-700 shadow' : 'hover:bg-stone-300 bg-transparent text-stone500 shadow-none'}`}>
          <Icon/>
          <span>{title}</span>
        </button>
    )
}
export default AdminRouteSelect