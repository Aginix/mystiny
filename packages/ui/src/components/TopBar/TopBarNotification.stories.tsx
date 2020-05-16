import React from 'react';
import SettingsIcon, { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { TopBarNotification } from './TopBarNotification';

export default {
  title: 'Topbar / Notification',
};

export const loading = () => <TopBarNotification count={0} loading />;

export const empty = () => <TopBarNotification count={0} messageList={[]} />;

export const content = () => (
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
);
