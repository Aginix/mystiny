import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, CssBaseline, Toolbar, IconButton, NoSsr, Hidden, AppBarProps, ToolbarProps } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { sidebarConfig } from '../Sidebar';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: sidebarConfig.drawerWidthOpen,
    width: `calc(100% - ${sidebarConfig.drawerWidthOpen}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(2),
    },
  },
  hide: {
    display: 'none',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export interface TopBarProps {
  open?: boolean;
  /** Toggles whether or not a navigation component has been provided. Controls the presence of the mobile nav toggle button */
  showNavigationToggle?: boolean;
  /** A callback function that handles hiding and showing mobile navigation */
  onNavigationToggle?(): void;
  AppBarProps?: AppBarProps;
  ToolbarProps?: ToolbarProps;
}

const TopBar: FC<TopBarProps> = ({
  children,
  onNavigationToggle,
  showNavigationToggle,
  open,
  AppBarProps,
  ToolbarProps,
}) => {
  const classes = useStyles({});

  const navigationButtonMarkup = showNavigationToggle ? (
    <Hidden mdUp>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={onNavigationToggle}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open,
        })}
      >
        <MenuIcon />
      </IconButton>
    </Hidden>
  ) : null;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        {...AppBarProps}
      >
        <NoSsr>
          <Toolbar {...ToolbarProps}>
            {navigationButtonMarkup}
            {children}
          </Toolbar>
        </NoSsr>
      </AppBar>
    </div>
  );
};

export default TopBar;
