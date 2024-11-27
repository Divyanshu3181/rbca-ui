import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserPermission, deletePermission, addPermission } from "../utils/roleSlice";

const PermissionManagement = () => {
  const users = useSelector((state) => state.role.users);
  const permissions = useSelector((state) => state.role.permissions);
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [newPermission, setNewPermission] = useState("");

  const handlePermissionChange = (userId, newPermission) => {
    dispatch(updateUserPermission({ userId, newPermission }));
    setMessage(`Permission updated for user.`);
  };

  const handleDeletePermission = (permission) => {
    dispatch(deletePermission(permission));
    setMessage(`Permission "${permission}" deleted successfully!`);
  };

  const handleAddPermission = () => {
    if (newPermission) {
      dispatch(addPermission(newPermission));
      setMessage(`Permission "${newPermission}" added successfully!`);
      setNewPermission("");
    }
  };

  return (
    <div className="ml-4 md:ml-80 p-6">
      <h2 className="text-2xl font-bold mb-4">Permission Management</h2>

      <div>
        <h3 className="text-xl font-semibold mb-4">Manage Users' Permissions</h3>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Current Permission</th>
                <th className="border px-4 py-2">Change Permission</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.permission || "None"}</td>
                  <td className="border px-4 py-2">
                    <select
                      value={user.permission || ""}
                      onChange={(e) => handlePermissionChange(user.id, e.target.value)}
                      className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select Permission</option>
                      {permissions.map((permission) => (
                        <option key={permission} value={permission}>
                          {permission}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold mt-6">Manage Permissions</h3>
        <ul className="space-y-2">
          {permissions.map((permission) => (
            <li
              key={permission}
              className="flex justify-between items-center p-2 bg-gray-100 rounded shadow hover:bg-gray-200 transition"
            >
              <span className="font-medium">{permission}</span>
              <button
                className="text-red-500 hover:underline transition duration-200 ease-in-out transform hover:scale-105"
                onClick={() => handleDeletePermission(permission)}
              >
                Delete Permission
              </button>
            </li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-6">Add New Permission</h3>
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            value={newPermission}
            onChange={(e) => setNewPermission(e.target.value)}
            placeholder="New Permission"
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddPermission}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Add Permission
          </button>
        </div>
      </div>
      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
};

export default PermissionManagement;
