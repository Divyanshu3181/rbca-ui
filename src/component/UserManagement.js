import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../utils/roleSlice';

const UserManagement = () => {
    const users = useSelector((state) => state.role.users);
    const roles = useSelector((state) => state.role.roles);
    const permissions = useSelector((state) => state.role.permissions);
    const dispatch = useDispatch();

    const [newUserName, setNewUserName] = useState('');
    const [newUserRole, setNewUserRole] = useState('');
    const [newUserPermission, setNewUserPermission] = useState('');

    const handleAddUser = () => {
        if (newUserName && newUserRole && newUserPermission) {
            dispatch(
                addUser({
                    id: Date.now(),
                    name: newUserName,
                    role: newUserRole,
                    permission: newUserPermission,
                })
            );
            setNewUserName('');
            setNewUserRole('');
            setNewUserPermission('');
        }
    };

    return (
        <div className="ml-4 md:ml-80 p-6 bg-gray-50 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">User Management</h2>
            <div className="mb-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <input
                    type="text"
                    placeholder="Name"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    className="border border-gray-300 p-3 rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select
                    value={newUserRole}
                    onChange={(e) => setNewUserRole(e.target.value)}
                    className="border border-gray-300 p-3 rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        Select Role
                    </option>
                    {roles.map((role) => (
                        <option key={role} value={role}>
                            {role}
                        </option>
                    ))}
                </select>
                <select
                    value={newUserPermission}
                    onChange={(e) => setNewUserPermission(e.target.value)}
                    className="border border-gray-300 p-3 rounded w-full md:w-1/4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>
                        Select Permission
                    </option>
                    {permissions.map((permission) => (
                        <option key={permission} value={permission}>
                            {permission}
                        </option>
                    ))}
                </select>
                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-200 w-full md:w-auto"
                    onClick={handleAddUser}
                >
                    Add User
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse border border-gray-200 text-sm md:text-base">
                    <thead>
                        <tr className="bg-blue-100 text-center">
                            <th className="border px-4 py-2">ID</th>
                            <th className="border px-4 py-2">Name</th>
                            <th className="border px-4 py-2">Role</th>
                            <th className="border px-4 py-2">Permission</th>
                            <th className="border px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="text-center hover:bg-gray-100 transition duration-200"
                            >
                                <td className="border px-4 py-2">{user.id}</td>
                                <td className="border px-4 py-2">{user.name}</td>
                                <td className="border px-4 py-2">{user.role}</td>
                                <td className="border px-4 py-2">{user.permission}</td>
                                <td className="border px-4 py-2">
                                    <button
                                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                                        onClick={() => dispatch(deleteUser(user.id))}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
