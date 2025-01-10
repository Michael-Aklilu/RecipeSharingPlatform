import { useState, useEffect } from "react";
import { FaUser, FaUserCog } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
const AdminList = ({ adminService }) => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const adminJSON = window.localStorage.getItem("LoggedInUser");
      const admin = JSON.parse(adminJSON);
      adminService.setToken(admin.token);
      const allAdmins = await adminService.getAdmins();
      setAdmins(allAdmins);
    } catch (error) {
      console.log("Error fetching admins");
    }
  };
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300 mt-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium text-lg">
          <FaUserCog size={21} />
          Admin List
        </h3>
      </div>
      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          {admins.map((admin) => {
            return (
              <TableRow
                key={admin.id}
                adminID={admin.id}
                username={admin.username}
                name={admin.name}
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
        <th className="text-start p-1.5">Admin ID</th>
        <th className="text-start p-1.5">Username</th>
        <th className="text-start p-1.5">Name</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({ adminID, username, name }) => {
  return (
    <tr className="bg-stone-300 text-lg text-gray-700 ">
      <td className="p-1.5">{adminID}</td>
      <td className="p-1.5">{username}</td>
      <td className="p-1.5">{name}</td>
      <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
        <FiMoreHorizontal />
      </button>
    </tr>
  );
};

export default AdminList;
