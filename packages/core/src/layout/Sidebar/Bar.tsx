import { makeStyles, Drawer, IconButton, Hidden, NoSsr } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import React, { FC } from 'react';
import { sidebarConfig } from './config';
import { AppTheme } from '@aginix/theme';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles<AppTheme>(theme => ({
  drawer: {
    width: sidebarConfig.drawerWidthOpen,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: sidebarConfig.drawerWidthOpen,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    [theme.breakpoints.down('xs')]: {
      width: 0,
      borderRight: 'none',
    },
  },
  toolbar: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
    },
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

type Props = {
  open?: boolean;
  handleClose?: () => void;
};

export const LeftSidebar: FC<Props> = ({ children, open, handleClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const container = typeof window !== 'undefined' ? () => window.document.body : undefined;

  return (
    <NoSsr>
      <nav>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            onClose={handleClose}
            classes={{
              paper: classes.drawerOpen,
            }}
            open={isMobile ? open : false}
            container={container}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {children}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            variant="permanent"
            className={clsx(classes.drawer, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            })}
            classes={{
              paper: clsx({
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              }),
            }}
          >
            <div className={classes.toolbar}>
              <IconButton onClick={handleClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            {children}
          </Drawer>
        </Hidden>
      </nav>
    </NoSsr>
  );
};
