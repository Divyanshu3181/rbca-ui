import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserRole, deleteRole, addRole } from '../utils/roleSlice';

const RoleManagement = ({ roles }) => {
    const users = useSelector(state => state.role.users);
    const roleList = useSelector(state => state.role.roles);
    const dispatch = useDispatch();
    const [newRole, setNewRole] = React.useState('');

    const handleRoleChange = (userId, newRole) => {
        dispatch(updateUserRole({ userId, newRole }));
    };

    const handleDeleteRole = (role) => {
        dispatch(deleteRole(role));
    };

    const handleAddRole = () => {
        if (newRole && !roleList.includes(newRole)) {
            dispatch(addRole(newRole));
            setNewRole('');
        }
    };

    return (
        <div className="ml-4 md:ml-80 p-6">
            <h2 className="text-2xl font-bold mb-4">Role Management</h2>
            <div>
                <h3 className="text-xl font-semibold mb-4">Manage Users' Roles</h3>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border px-4 py-2">Name</th>
                                <th className="border px-4 py-2">Current Role</th>
                                <th className="border px-4 py-2">Change Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="border px-4 py-2">{user.name}</td>
                                    <td className="border px-4 py-2">{user.role}</td>
                                    <td className="border px-4 py-2">
                                        <select
                                            value={user.role}
                                            onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            {roleList.map(role => (
                                                <option key={role} value={role}>
                                                    {role}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <h3 className="text-xl font-semibold mt-6">Manage Roles</h3>
                <ul className="space-y-2">
                    {roleList.map(role => (
                        <li key={role} className="flex justify-between items-center p-2 bg-gray-100 rounded shadow hover:bg-gray-200 transition">
                            <span className="font-medium">{role}</span>
                            <button
                                className="text-red-500 hover:underline transition duration-200 ease-in-out transform hover:scale-105"
                                onClick={() => handleDeleteRole(role)}
                            >
                                Delete Role
                            </button>
                        </li>
                    ))}
                </ul>
                <h3 className="text-xl font-semibold mt-6">Add New Role</h3>
                <div className="flex items-center space-x-2 mb-4">
                    <input
                        type="text"
                        value={newRole}
                        onChange={(e) => setNewRole(e.target.value)}
                        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new role"
                    />
                    <button
                        onClick={handleAddRole}
                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Add Role
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RoleManagement;
