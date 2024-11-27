import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    roles: ["Super Admin", "Admin", "Editor", "Viewer", "Guest"],
    users: [
        { id: 1, name: "John Doe", role: "Admin", permission: "Read" }, 
    ],
    permissions: ["Read", "Write", "Delete"], 
};

const roleSlice = createSlice({
    name: 'role',
    initialState,
    reducers: {
        addPermission: (state, action) => {
            if (!state.permissions.includes(action.payload)) {
                state.permissions.push(action.payload);
            }
        },
        deletePermission: (state, action) => {
            state.permissions = state.permissions.filter(permission => permission !== action.payload);
        },
        addRole: (state, action) => {
            if (!state.roles.includes(action.payload)) {
                state.roles.push(action.payload);
            }
        },
        deleteRole: (state, action) => {
            state.roles = state.roles.filter(role => role !== action.payload);
        },
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(user => user.id !== action.payload);
        },
        updateUserRole: (state, action) => {
            const { id, newRole } = action.payload;
            const user = state.users.find(user => user.id === id);
            if (user) {
                user.role = newRole;
            }
        },
        updateUserPermission: (state, action) => {
            const { userId, newPermission } = action.payload;
            const user = state.users.find(user => user.id === userId);
            if (user) {
                user.permission = newPermission;
            }
        },
    },
});

export const { 
    addPermission, 
    deletePermission, 
    addRole, 
    deleteRole, 
    addUser, 
    deleteUser, 
    updateUserRole, 
    updateUserPermission 
} = roleSlice.actions;

export default roleSlice.reducer;
