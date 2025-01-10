import { FiUser, FiMoreHorizontal } from "react-icons/fi";
import { useState, useEffect } from "react";
const UsersList = ({ userService }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const adminJSON = localStorage.getItem("LoggedInAdmin");
      const admin = JSON.parse(adminJSON);
      await userService.setToken(admin.token);
      const allUsers = await userService.getAllUsers();
      setUsers(allUsers);
    } catch (error) {
      console.log("Error fetching users");
    }
  };
  return (
    <div className="col-span-12 p-4 border border-stone-300 mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium text-lg">
          <FiUser size={21} />
          Users List
        </h3>
      </div>
      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          {users.map((user) => {
            return (
              <TableRow
                key={user.id}
                userID={user.id}
                username={user.username}
                name={user.name}
                recipesNumber={user.savedRecipes.length}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-lg font-normal text-stone-500">
        <th className="text-start p-1.5">User ID</th>
        <th className="text-start p-1.5">Username</th>
        <th className="text-start p-1.5">Name</th>
        <th className="text-start p-1.5">Number of recipes</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ userID, username, name, recipesNumber }) => {
  return (
    <tr className="bg-stone-300 text-lg text-gray-700">
      <td className="p-1.5">{userID}</td>
      <td className="p-1.5">{username}</td>
      <td className="p-1.5">{name}</td>
      <td className="p-1.5">{recipesNumber}</td>
      <td className="p-1.5">
        <button
          className="hover:bg-stone-200 transition-colors grid place-content- rounded text-lg size-8"
          aria-label="More actions"
        >
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};

export default UsersList;
