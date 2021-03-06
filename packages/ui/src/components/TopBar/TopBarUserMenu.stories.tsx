import React from 'react';
import EnterToAdminIcon from '@material-ui/icons/ExitToApp';
import PersonIcon from '@material-ui/icons/Person';
import TopBarUserMenu from './TopBarUserMenu';

export default {
  title: 'Topbar / UserMenu',
};

export const plain = () => <TopBarUserMenu />;

export const withDetail = () => <TopBarUserMenu initials="N" detail="Nonpawit Teerachetmongkol" />;

export const withActions = () => (
  <TopBarUserMenu
    actions={[
      { content: 'Admin', icon: <EnterToAdminIcon fontSize="small" /> },
      { spacer: true },
      { content: 'My Profile', icon: <PersonIcon fontSize="small" /> },
      { content: 'Logout' },
    ]}
    initials="N"
    name="Nonpawit Teerachetmongkol"
    detail="Aginix Technologies"
  />
);
