import React, { FC, Fragment, useState, useCallback, ReactNode } from 'react';

import { Link, Typography, styled, List, ListItem, ListItemIcon, ListItemText, Collapse } from '@material-ui/core';
import { makeStyles, fade } from '@material-ui/core/styles';
import { ListItemProps } from '@material-ui/core/ListItem';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { AppTheme } from '@mystiny/theme';

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nestedWrapper: {
    '& .MuiListItem-root': {
      paddingLeft: theme.spacing(3.5),
    },
  },
  icon: {
    color: fade(theme.palette.textContrast, 0.45),
    minWidth: theme.spacing(4),
  },
  iconExpand: {
    color: fade(theme.palette.textContrast, 0.45),
  },
  item: {
    paddingLeft: theme.spacing(1.5),
    paddingRight: theme.spacing(1.5),
    minHeight: 36,
  },
  label: {
    fontSize: '0.835rem',
    lineHeight: '1.5',
    color: fade(theme.palette.textContrast, 0.75),
    fontWeight: 500,
  },
  collapse: {
    minHeight: 'unset !important',
  }
}));

export interface SidebarItemProps extends Omit<ListItemProps<'button'>, 'onClick' | 'button'> {
  text?: string;
  icon?: ReactNode;
  to?: string;
  onClick?: () => void;
}

export const SidebarItem: FC<SidebarItemProps> = React.forwardRef(({ text, icon, to, onClick, children, ref }) => {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  if (!children) {
    return (
      <Link href={to} onClick={onClick} underline="none" ref={ref}>
        <ListItem button dense classes={{ root: classes.item }}>
          {icon ? <ListItemIcon classes={{ root: classes.icon }}>{icon}</ListItemIcon> : null}
          <ListItemText
            primary={
              <Typography className={classes.label} variant="subtitle1" component="span">
                {text}
              </Typography>
            }
          />
        </ListItem>
      </Link>
    );
  }

  return (
    <Fragment>
      <ListItem button dense onClick={handleClick} classes={{ root: classes.item }} innerRef={ref}>
        {icon ? <ListItemIcon classes={{ root: classes.icon }}>{icon}</ListItemIcon> : null}

        <ListItemText
          primary={
            <Typography className={classes.label} variant="subtitle1" component="span">
              {text}
            </Typography>
          }
        />
        {open ? <ExpandLess className={classes.iconExpand} /> : <ExpandMore className={classes.iconExpand} />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit className={classes.collapse}>
        <List component="div" disablePadding dense className={classes.nestedWrapper}>
          {children}
        </List>
      </Collapse>
    </Fragment>
  );
});

export const SidebarSpace = styled('div')({
  flex: 1,
});

export const SidebarSpacer = styled('div')({
  height: 8,
  minHeight: 8,
});

export const SidebarDivider = styled('hr')(({ theme }) => ({
  height: 1,
  minHeight: 1,
  width: '100%',
  background: theme.palette.divider,
  border: 'none',
  margin: 0,
}));
