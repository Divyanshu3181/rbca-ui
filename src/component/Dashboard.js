import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Paper, Typography, List, ListItem } from '@mui/material';
import {
  People,
  Security,
  Lock,
  SupervisorAccount,
  Edit,
  Visibility,
  PersonOutline,
} from '@mui/icons-material';

const Dashboard = () => {
  const { users, roles, permissions } = useSelector((state) => state.role);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Admin Dashboard
      </Typography>

      <Grid container spacing={3} style={{ marginBottom: '20px' }}>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
            <People style={{ fontSize: '3rem', marginRight: '10px' }} />
            <div>
              <Typography variant="h6">Users</Typography>
              <Typography variant="h4">{users.length}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
            <Security style={{ fontSize: '3rem', marginRight: '10px' }} />
            <div>
              <Typography variant="h6">Roles</Typography>
              <Typography variant="h4">{roles.length}</Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} style={{ padding: '20px', display: 'flex', alignItems: 'center' }}>
            <Lock style={{ fontSize: '3rem', marginRight: '10px' }} />
            <div>
              <Typography variant="h6">Permissions</Typography>
              <Typography variant="h4">{permissions.length}</Typography>
            </div>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        User Details
      </Typography>
      <List>
        {users.map((user) => {
          let roleIcon;
          switch ((user.role || '').trim().toLowerCase()) {
            case 'admin':
              roleIcon = <Security style={{ marginRight: '10px' }} />;
              break;
            case 'super admin':
              roleIcon = <SupervisorAccount style={{ marginRight: '10px' }} />;
              break;
            case 'editor':
              roleIcon = <Edit style={{ marginRight: '10px' }} />;
              break;
            case 'viewer':
              roleIcon = <Visibility style={{ marginRight: '10px' }} />;
              break;
            case 'guest':
              roleIcon = <PersonOutline style={{ marginRight: '10px' }} />;
              break;
            default:
              roleIcon = <People style={{ marginRight: '10px' }} />;
          }

          return (
            <ListItem key={user.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
              {roleIcon}
              <Typography variant="body1" style={{ flexGrow: 1 }}>
                {user.name} - {user.role}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default Dashboard;
