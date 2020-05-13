import { makeStyles, Drawer, Hidden, NoSsr } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import React, { FC } from 'react';
import { sidebarConfig } from './config';
import { AppTheme } from '@aginix/theme';

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
}));

type Props = {
  open?: boolean;
  handleClose?: () => void;
};

export const Sidebar: FC<Props> = ({ children, open, handleClose }) => {
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
            variant="persistent"
            open={open}
            className={clsx(classes.drawer, classes.drawerOpen)}
            classes={{
              paper: classes.drawerOpen,
            }}
          >
            {children}
          </Drawer>
        </Hidden>
      </nav>
    </NoSsr>
  );
};
