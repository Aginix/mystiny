import React, { useCallback, useState } from 'react';
import Frame from './Frame';
import { Link, Button, Typography } from '@material-ui/core';
import { TopBar } from '../TopBar';
import SettingsIcon from '@material-ui/icons/Settings';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/AddCircleSharp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Hidden } from '@material-ui/core';
import { Sidebar, SidebarSpacer, SidebarSpace, SidebarItem, SidebarDivider } from '../Sidebar';
import { useBreakpoints } from '../../utilities/devices';

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

export const withTopBarAndNavigation = () => {
  const isTabletDown = useBreakpoints('down', 'sm');
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive),
    [],
  );

  const navigationMarkup = (
    <Sidebar
      open={isTabletDown ? mobileNavigationActive : true}
      handleClose={toggleMobileNavigationActive}
      addSpaceForTopBar
    >
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
  );

  return (
    <Frame
      topBar={<TopBar showNavigationToggle onNavigationToggle={toggleMobileNavigationActive} />}
      navigation={navigationMarkup}
    >
      <Typography variant="body1" component="p">
        Content
      </Typography>
    </Frame>
  );
};
