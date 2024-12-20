import { FiUser, FiMoreHorizontal } from 'react-icons/fi'
const UsersList = () => {
    return (
        <div className="col-span-12 p-4 border border-stone-300 mt-8">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUser size={21}/>Users List
                </h3>
                <button className='text-sm text-gray-700 hover:underline'>
                    See all
                </button>
            </div>
            <table className='w-full table-auto'>
                <TableHead/>

                <tbody>
                   <TableRow userID='434343' username='john' name='John Doe' recipesNumber='7'/>
                   <TableRow userID='434343' username='john' name='John Doe' recipesNumber='7'/>
                   <TableRow userID='434343' username='john' name='John Doe' recipesNumber='7'/>
                   <TableRow userID='434343' username='john' name='John Doe' recipesNumber='7'/>
                   <TableRow userID='434343' username='john' name='John Doe' recipesNumber='7'/>
                </tbody>
            </table>
        </div>
    )
}

const TableHead = () => {
    return <thead>
        <tr className='text-sm font-normal text-stone-500'>
            <th className='text-start p-1.5'>User ID</th>
            <th className='text-start p-1.5'>Username</th>
            <th className='text-start p-1.5'>Name</th>
            <th className='text-start p-1.5'>Number of recipes</th>
            <th className='w-8'></th>
        </tr>
    </thead>
}

const TableRow = ({userID,username,name,recipesNumber}) => {
    return <tr className='bg-stone-300  text-sm text-gray-700 '>
      <td className='p-1.5'>{userID}</td>
      <td className='p-1.5'>{username}</td>
      <td className='p-1.5'>{name}</td>
      <td className='p-1.5 '>{recipesNumber}</td>
      <button className='jover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8'>
        <FiMoreHorizontal/>
      </button>
    </tr>
}

export default UsersList