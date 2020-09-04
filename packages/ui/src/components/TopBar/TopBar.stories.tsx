import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { Typography } from '@material-ui/core';
import TopBar from './TopBar';
import TopBarUserMenu from './TopBarUserMenu';
import { TopBarSpace } from './TopBarSpace';
import TopBarNotification from './TopBarNotification';

export default {
  title: 'Topbar / Layout',
};

export const defaultTopBar = () => (
  <TopBar AppBarProps={{ variant: 'elevation', color: 'inherit' }}>
    <Typography variant="h6" noWrap>
      Mystiny
    </Typography>
    <TopBarSpace />
    <TopBarNotification
      count={2}
      messageList={[
        {
          id: '1',
          title: 'Sketch',
          text:
            '<a style="color: inherit;" target="_blank" rel="noopener" href="https://twitter.com/MaterialUI/status/1244519729978437633">Introducing Material-UI for Sketch</a>. Today, we’re excited to introduce the Sketch symbols 💎 for Material-UI.',
          date: '2020-05-14',
        },
        {
          id: '2',
          title: 'Github',
          text:
            'You can <a style="color: inherit;" target="_blank" rel="noopener" href="https://github.com/aginix/mystiny">follow us on Twitter</a>.',
        },
      ]}
    />
    <TopBarUserMenu
      actions={[
        { content: 'My Profile', icon: <PersonIcon fontSize="small" /> },
        {
          content: 'Logout',
          onAction: () => {
            window.alert('Logged out!');
          },
        },
      ]}
      initials="N"
      name="Nonpawit Teerachetmongkol"
      detail="Aginix Technologies"
    />
  </TopBar>
);
