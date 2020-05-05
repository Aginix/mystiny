import React from 'react';
import Page from './Page';
import { Link, Button, Typography } from '@material-ui/core';

export default {
  title: 'Page',
  component: Page,
};

export const Default = () => (
  <Page>
    <Typography variant="h4">Page</Typography>
  </Page>
);
