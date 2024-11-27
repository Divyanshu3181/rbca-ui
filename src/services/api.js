// src/services/api.js
export const mockAPI = {
    fetchUsers: () => Promise.resolve([{ id: 1, name: "John Doe", role: "Admin" }]),
    fetchRoles: () => Promise.resolve([{ id: 1, name: "Admin", permissions: ["Read"] }]),
};
