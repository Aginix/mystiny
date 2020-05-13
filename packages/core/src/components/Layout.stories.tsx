import React from 'react';
import Page, { pageTheme } from './Page';
import SettingsIcon from '@material-ui/icons/Settings';
import { Typography } from '@material-ui/core';
import Header from './Header';
import Content from './Content';
import HeaderLabel from './HeaderLabel';
import HeaderActionMenu from './HeaderActionMenu';

export default {
  title: 'Layout',
  component: Page,
};

export const Default = () => (
  <Page theme={pageTheme.documentation}>
    <Header title={`Title of Page`} subtitle="Subtitle of Page">
      <HeaderLabel label="Label1" value="Value" />
      <HeaderLabel label="Label2" value="Value" />
      <HeaderActionMenu
        actionItems={[
          {
            label: 'Settings',
            onClick: () => {
              console.log('Click Test');
            },
            icon: <SettingsIcon />,
            secondaryLabel: 'Secondary',
          },
        ]}
      />
    </Header>
    <Content>
      <Typography variant="body1" component="p" gutterBottom>
        Content
      </Typography>
    </Content>
  </Page>
);
