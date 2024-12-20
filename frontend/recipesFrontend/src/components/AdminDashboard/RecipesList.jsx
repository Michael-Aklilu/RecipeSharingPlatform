import { FiUser, FiMoreHorizontal } from 'react-icons/fi'
import { FaBook } from 'react-icons/fa'
const RecipesList = () => {
    return (
        <div className="col-span-12 p-4 rounded border border-stone-300 mt-8">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FaBook size={21}/>Recipes List
                </h3>
                <button className='text-sm text-gray-700 hover:underline'>
                    See all
                </button>
            </div>
            <table className='w-full table-auto'>
                <TableHead/>

                <tbody>
                   <TableRow recipeID='74849' userID='434343' recipeName='Spaghetti Carbonara' likes='7888'/>
                   <TableRow recipeID='74849' userID='434343' recipeName='Spaghetti Carbonara' likes='7888'/>
                   <TableRow recipeID='74849' userID='434343' recipeName='Spaghetti Carbonara' likes='7888'/>
                   <TableRow recipeID='74849' userID='434343' recipeName='Spaghetti Carbonara' likes='7888'/>
                   <TableRow recipeID='74849' userID='434343' recipeName='Spaghetti Carbonara' likes='7888'/>
                </tbody>
            </table>
        </div>
    )
}

const TableHead = () => {
    return <thead>
        <tr className='text-sm font-normal text-stone-500'>
            <th className='text-start p-1.5'>Recipe ID</th>
            <th className='text-start p-1.5'>User ID</th>
            <th className='text-start p-1.5'>Name</th>
            <th className='text-start p-1.5'>Number of likes</th>
            <th className='w-8'></th>
        </tr>
    </thead>
}

const TableRow = ({recipeID,userID,recipeName,likes}) => {
    return <tr className='bg-stone-300  text-sm text-gray-700 '>
      <td className='p-1.5'>{recipeID}</td>
      <td className='p-1.5'>{userID}</td>
      <td className='p-1.5'>{recipeName}</td>
      <td className='p-1.5 '>{likes}</td>
      <button className='hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8'>
        <FiMoreHorizontal/>
      </button>
    </tr>
}

export default RecipesList