import React, { useCallback } from 'react';
import { ListItemIcon, Avatar, Menu, NoSsr, MenuItem, Tooltip, Typography, Button, Hidden } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { IconableAction } from '../types';
import { AppTheme } from '@mystiny/theme';
import { usePopupState, bindTrigger, bindMenu } from 'material-ui-popup-state/hooks';

const useStyles = makeStyles((theme: AppTheme) => ({
  icon: {
    minWidth: theme.spacing(4),
  },
  button: {
    textAlign: 'left',
    textTransform: 'none',
    color: theme.palette.getContrastText(theme.palette.appbar),
    [theme.breakpoints.down('xs')]: {
      paddingRight: 0,
    },
  },
  details: {
    maxWidth: theme.spacing(32),
    marginLeft: theme.spacing(1),
  },
  name: {
    color: theme.palette.getContrastText(theme.palette.appbar),
    fontWeight: 500,
    lineHeight: 1.3,
  },
  detail: {
    color: fade(theme.palette.getContrastText(theme.palette.appbar), 0.75),
    fontSize: '0.835rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
}));

export interface TopBarUserMenuProps {
  actions?: IconableAction[];
  name?: string;
  detail?: string;
  initials?: string;
}

const TopBarUserMenu = ({ actions = [], name, detail, initials }: TopBarUserMenuProps) => {
  const classes = useStyles({});
  const ID = `TopBarUserMenu-${name}`;
  const popupState = usePopupState({ variant: 'popover', popupId: 'user-menu' });

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
      {actions.map((action, index) => (
        <MenuItem
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
      ))}
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
        .filter((action) => !action.hideOnMobile)
        .map((action, index) => (
          <MenuItem
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
        ))}
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
