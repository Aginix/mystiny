import React, { FC, Fragment } from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import { sidebarConfig } from '../Sidebar';
import { Toolbar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  content: {},
  contentWithDrawer: {
    [theme.breakpoints.up('md')]: {
      marginLeft: sidebarConfig.drawerWidthOpen,
    },
  },
  navigationWrapper: {},
  topBarWrapper: {},
}));

export interface FrameProps {
  /** Accepts a top bar component that will be rendered at the top-most portion of an application frame */
  topBar?: React.ReactNode;
  /** Accepts a navigation component that will be rendered in the left sidebar of an application frame */
  navigation?: React.ReactNode;
  /** Accepts a global ribbon component that will be rendered fixed to the bottom of an application frame */
  globalRibbon?: React.ReactNode;
  /** A boolean property indicating whether the mobile navigation is currently visible
   * @default false
   */
  showMobileNavigation?: boolean;
  /** Accepts a ref to the html anchor element you wish to focus when clicking the skip to content link */
  skipToContentTarget?: React.RefObject<HTMLAnchorElement>;
  /** A callback function to handle clicking the mobile navigation dismiss button */
  onNavigationDismiss?(): void;
}

const Frame: FC<FrameProps> = ({ topBar, navigation, children }) => {
  const classes = useStyles({});
  let navigationMarkup: React.ReactNode | null = null;
  let topBarMarkup: React.ReactNode | null = null;
  let topBarGutterMarkup: React.ReactNode | null = null;
  let contentMarkup = <div className={classes.content}>{children}</div>;

  if (navigation) {
    navigationMarkup = <div className={classes.navigationWrapper}>{navigation}</div>;
    contentMarkup = <div className={classes.contentWithDrawer}>{children}</div>;
  }

  if (topBar) {
    topBarMarkup = <div className={classes.topBarWrapper}>{topBar}</div>;
    topBarGutterMarkup = <Toolbar />;
  }

  return (
    <Fragment>
      {topBarMarkup}
      {navigationMarkup}
      {topBarGutterMarkup}
      {contentMarkup}
    </Fragment>
  );
};

export default Frame;
