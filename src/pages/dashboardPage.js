import React, { useState } from 'react';
import Dashboard from '../component/Dashboard';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'Editor' },
  ]);
  const [roles, setRoles] = useState(['Admin', 'Editor', 'Viewer']);
  const [permissions, setPermissions] = useState(['Read', 'Write', 'Delete']);

  // Functions to manage data

  return (
    <div className='ml-4 md:ml-80'>
      <Dashboard
        users={users}
        roles={roles}
        permissions={permissions}
        
      />
    </div>
  );
};

export default App;
