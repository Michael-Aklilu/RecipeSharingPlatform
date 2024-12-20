import { FaUser, FaUserCog } from 'react-icons/fa'
import { FiMoreHorizontal } from 'react-icons/fi'
const AdminList = () => {
   return (
           <div className="col-span-12 p-4 rounded border border-stone-300 mt-8">
               <div className="mb-4 flex items-center justify-between">
                   <h3 className="flex items-center gap-1.5 font-medium">
                       <FaUserCog size={21}/>Admin List
                   </h3>
                   <button className='text-sm text-gray-700 hover:underline'>
                       See all
                   </button>
               </div>
               <table className='w-full table-auto'>
                   <TableHead/>
   
                   <tbody>
                      <TableRow adminID='58' username='Sura' name='Surafel Tadesse'/>
                      <TableRow adminID='58' username='Sura' name='Surafel Tadesse'/>              
                   </tbody>
               </table>
           </div>
       )
}

const TableHead = () => {
    return <thead>
        <tr className='text-sm font-normal text-stone-500'>
            <th className='text-start p-1.5'>Admin ID</th>
            <th className='text-start p-1.5'>Username</th>
            <th className='text-start p-1.5'>Name</th>
            <th className='w-8'></th>
        </tr>
    </thead>
}

const TableRow = ({adminID,username,name}) => {
    return <tr className='bg-stone-300  text-sm text-gray-700 '>
      <td className='p-1.5'>{adminID}</td>
      <td className='p-1.5'>{username}</td>
      <td className='p-1.5'>{name}</td>
      <button className='hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8'>
        <FiMoreHorizontal/>
      </button>
    </tr>
}

export default AdminList

