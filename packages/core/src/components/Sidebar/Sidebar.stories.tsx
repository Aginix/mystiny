import React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/AddCircleSharp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Hidden } from '@material-ui/core';
import { Sidebar } from './Sidebar';
import { SidebarSpacer, SidebarSpace, SidebarItem, SidebarDivider } from './SidebarItems';
import { SidebarPage } from './Page';
import { SidebarContext } from './config';

export default {
  title: 'Sidebar',
};

export const sidebar = () => (
  <SidebarContext.Provider value={false}>
    <SidebarPage>
      <Sidebar open={true}>
        <Hidden smUp>
          <SidebarSpacer />
          <SidebarItem text="Aginix Technologies" />
          <SidebarSpacer />
        </Hidden>
        <SidebarDivider />

        <SidebarItem text="No Icon" />
        <SidebarSpacer />
        <SidebarItem text="Home" icon={<HomeIcon />} />
        <SidebarSpacer />
        <SidebarItem text="Analytics" icon={<TimelineIcon />}>
          <SidebarItem text="Dashboard" icon={<DashboardIcon />} />
          <SidebarItem text="Report" icon={<AssessmentIcon />} />
        </SidebarItem>
        <SidebarDivider />
        <SidebarItem text="Marketing" icon={<ThumbUpIcon />}>
          <SidebarItem text="Overview" />
        </SidebarItem>
        <SidebarDivider />
        <SidebarSpacer />
        <SidebarSpacer />
        <SidebarSpacer />
        <SidebarItem text="Add a sale channel" icon={<AddIcon />} />
        <SidebarSpace />
        <SidebarItem text="Settings" icon={<SettingsIcon />} />
        <SidebarSpacer />
        <SidebarSpacer />
      </Sidebar>
    </SidebarPage>
  </SidebarContext.Provider>
);

sidebar.story = {
  name: 'Full sidebar',
};
