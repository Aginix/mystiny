import React, { useCallback } from 'react';
import {
  ListItemIcon,
  Avatar,
  Menu,
  NoSsr,
  MenuItem,
  Tooltip,
  Typography,
  Button,
  Hidden,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SpacerAction, IconableAction } from '../types';
import { AppTheme } from '@mystiny/theme';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';

const useStyles = makeStyles((theme: AppTheme) => ({
  icon: {
    minWidth: theme.spacing(4),
  },
  button: {
    textAlign: 'left',
    textTransform: 'none',
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  details: {
    maxWidth: theme.spacing(32),
    marginLeft: theme.spacing(1),
  },
  name: {
    color: 'inherit',
    fontWeight: 500,
    lineHeight: 1.3,
  },
  detail: {
    fontSize: '0.835rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
}));

export interface TopBarUserMenuProps {
  actions?: (IconableAction | SpacerAction)[];
  name?: string;
  detail?: string;
  initials?: string;
}

const TopBarUserMenu = ({ actions = [], name, detail, initials }: TopBarUserMenuProps) => {
  const classes = useStyles({});
  const ID = `TopBarUserMenu-${name}`;
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'user-menu',
  });

  const handleClick = useCallback(
    (callback?: () => void) => () => {
      if (callback) {
        callback();
      }

      popupState.close();
    },
    [popupState, actions],
  );

  const menuId = 'user-menu';
  const renderMenu = (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      {...bindMenu(popupState)}
      id={menuId}
    >
      {actions.map((action, index) => {
        if (action.hidden) {
          return null;
        }
        return 'content' in action ? (
          <MenuItem
            id={action.id}
            key={index}
            onMouseEnter={action.onMouseEnter}
            onTouchStart={action.onTouchStart}
            onClick={handleClick(action.onAction)}
          >
            {action.icon ? <ListItemIcon className={classes.icon}>{action.icon}</ListItemIcon> : null}
            <Typography variant="inherit" noWrap>
              {action.content}
            </Typography>
          </MenuItem>
        ) : 'spacer' in action && action.spacer ? (
          <Box key={index} height={12} />
        ) : null;
      })}
    </Menu>
  );

  const mobileMenuId = 'user-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      {...bindMenu(popupState)}
      id={mobileMenuId}
    >
      {actions
        .filter(
          (action) =>
            !action.hidden ||
            ('spacer' in action && action.spacer) ||
            ('hideOnMobile' in action && !action.hideOnMobile),
        )
        .map((action, index) =>
          'content' in action ? (
            <MenuItem
              id={action.id}
              key={index}
              onMouseEnter={action.onMouseEnter}
              onTouchStart={action.onTouchStart}
              onClick={handleClick(action.onAction)}
            >
              {action.icon ? <ListItemIcon className={classes.icon}>{action.icon}</ListItemIcon> : null}
              <Typography variant="inherit" noWrap>
                {action.content}
              </Typography>
            </MenuItem>
          ) : (
            <Box key={index} height={12} />
          ),
        )}
    </Menu>
  );

  return (
    <NoSsr>
      <Tooltip title={'Toggle User Menu'} enterDelay={300}>
        <Button
          variant="text"
          className={classes.button}
          aria-label="TopBarUserMenu"
          aria-controls={ID}
          aria-haspopup="true"
          {...bindTrigger(popupState)}
        >
          <Avatar>{initials}</Avatar>
          <Hidden smDown>
            <span className={classes.details}>
              <Typography variant="subtitle1" component="p" className={classes.name} noWrap>
                {name}
              </Typography>
              <Typography variant="subtitle2" component="p" className={classes.detail} noWrap>
                {detail}
              </Typography>
            </span>
          </Hidden>
        </Button>
      </Tooltip>
      {/* <IconButton
        edge="end"
        aria-label="TopBarUserMenu"
        aria-controls={ID}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <Avatar>{initials}</Avatar>
      </IconButton> */}
      {renderMobileMenu}
      {renderMenu}
    </NoSsr>
  );
};

export default TopBarUserMenu;
