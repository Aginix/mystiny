import React, { useCallback, useState } from 'react';
import Frame from './Frame';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import { TopBar } from '../TopBar';
import SettingsIcon from '@material-ui/icons/Settings';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TimelineIcon from '@material-ui/icons/Timeline';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/AddCircleSharp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import { Hidden } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Sidebar, SidebarSpacer, SidebarSpace, SidebarItem, SidebarDivider } from '../Sidebar';
import { useBreakpoints } from '../../utilities/devices';
import Content from '../Content';

export default {
  title: 'Frame',
  component: Frame,
};

export const Example = () => {
  const isTabletDown = useBreakpoints('down', 'sm');
  const [value, setValue] = React.useState(0);
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
      showNavigationBottom={isTabletDown}
      navigationBottom={
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      }
    >
      <Content>
        <Typography variant="body1" component="p">
          Content
        </Typography>
      </Content>
    </Frame>
  );
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

export const withMobileNavigationBottom = () => {
  const isTabletDown = useBreakpoints('down', 'sm');
  const [value, setValue] = React.useState(0);

  return (
    <Frame
      showNavigationBottom={isTabletDown}
      navigationBottom={
        <BottomNavigation
          value={value}
          onChange={(_, newValue) => {
            setValue(newValue);
          }}
          showLabels
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      }
    >
      <Content>
        <Typography variant="body1" component="p">
          Content
        </Typography>
      </Content>
    </Frame>
  );
};
