import React, { FC, useState, memo } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import TopNavbar from '../TopNavbar';
import { LeftSidebar, SidebarContext, SidebarDivider, SidebarSpace } from '../Sidebar';
import { CssBaseline } from '@material-ui/core';
import TopNavbarSpacer from '~/layout/TopNavbar/TopNavbarSpacer';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    paddingBottom: theme.spacing(3),
  },
}));

const Layout = memo(() => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpen = () => {
    setSidebarOpen(true);
  };
  const handleClose = () => {
    setSidebarOpen(false);
  };

  return (
    <SidebarContext.Provider value={sidebarOpen}>
      <TopNavbar open={sidebarOpen} handleOpen={handleOpen} />
      <LeftSidebar open={sidebarOpen} handleClose={handleClose}>
        <SidebarDivider />
        <SidebarSpace />
      </LeftSidebar>
    </SidebarContext.Provider>
  );
});

const Root: FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Layout />
      <main className={classes.content}>
        <TopNavbarSpacer />
        {children}
      </main>
    </div>
  );
};

Layout.displayName = 'Layout';

export default Root;
