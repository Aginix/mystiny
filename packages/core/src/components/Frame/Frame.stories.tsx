import React from 'react';
import Frame from './Frame';
import { Link, Button, Typography } from '@material-ui/core';
import TopBar from '../TopBar';
import { sidebar as Sidebar } from '../Sidebar/Sidebar.stories';

export default {
  title: 'Frame',
  component: Frame,
};

export const onlyContent = () => (
  <Frame>
    <Typography variant="body1" component="p">
      Content
    </Typography>
  </Frame>
);

export const withTopBar = () => (
  <Frame topBar={<TopBar />}>
    <Typography variant="body1" component="p">
      Content
    </Typography>
  </Frame>
);

export const withTopBarAndNavigation = () => (
  <Frame topBar={<TopBar />} navigation={<Sidebar />}>
    <Typography variant="body1" component="p">
      Content
    </Typography>
  </Frame>
);
