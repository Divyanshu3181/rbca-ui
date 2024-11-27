import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserManagement from './component/UserManagement';
import RoleManagement from './component/RoleManagement';
import PermissionManagement from './component/PermissionManagement';
import Sidebar from './component/Sidebar';
import Dashboard from './pages/dashboardPage';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Sidebar />
                <main className="main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/users" element={<UserManagement />} />
                        <Route path="/roles" element={<RoleManagement />} />
                        <Route path="/permissions" element={<PermissionManagement />} />
                        <Route path="*" element={<div>404: Page Not Found</div>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
