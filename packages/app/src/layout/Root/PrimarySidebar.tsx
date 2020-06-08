import { Hidden } from '@material-ui/core';
import Link from 'next/link'
import AddIcon from '@material-ui/icons/AddCircleSharp';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DashboardIcon from '@material-ui/icons/Dashboard';
import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import TimelineIcon from '@material-ui/icons/Timeline';
import { Sidebar, SidebarDivider, SidebarItem, SidebarProps, SidebarSpace, SidebarSpacer } from '@mystiny/ui';
import React, { FC } from 'react';

const PrimarySidebar: FC<SidebarProps> = (props) => {
  return (<Sidebar {...props}>
      <Hidden smUp>
        <SidebarSpacer />
        <SidebarItem text="Aginix Technologies" />
        <SidebarSpacer />
      </Hidden>
      <SidebarDivider />

      <SidebarItem text="No Icon" />
      <SidebarSpacer />
      <Link href="/">
        <SidebarItem text="Home" icon={<HomeIcon />} />
      </Link>
      <Link href="/form-example">
        <SidebarItem text="Example" icon={<HomeIcon />} />
      </Link>
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
  )
}

export default PrimarySidebar