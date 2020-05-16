import React from 'react';
import {
  Tooltip,
  IconButton,
  Badge,
  NoSsr,
  Popper,
  ClickAwayListener,
  Grow,
  Paper,
  List,
  ListItem,
  Typography,
  CircularProgress,
  Divider,
} from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { makeStyles } from '@material-ui/core/styles';
import { usePopupState, bindTrigger, bindPopper } from 'material-ui-popup-state/hooks';

const useStyles = makeStyles((theme) => ({
  paper: {
    transformOrigin: 'top right',
  },
  list: {
    width: theme.spacing(40),
    maxHeight: theme.spacing(40),
    overflow: 'auto',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1, 0),
  },
  divider: {
    margin: theme.spacing(1, 0),
  },
  empty: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));

export interface Message {
  id: string;
  title?: string;
  text?: string;
  date?: string;
}

export interface TopBarNotificationProps {
  count?: number;
  messageList?: Message[];
  loading?: boolean;
}

export const TopBarNotification = ({ count = 0, messageList, loading }: TopBarNotificationProps) => {
  const classes = useStyles({});
  const popupState = usePopupState({ variant: 'popper', popupId: 'toggle-notifications' });
  return (
    <NoSsr>
      <Tooltip title={'Toggle Notifications'} enterDelay={300}>
        <IconButton aria-label="show new notifications" color="inherit" {...bindTrigger(popupState)}>
          <Badge badgeContent={count ? count : null} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <Popper {...bindPopper(popupState)} transition disablePortal placement="bottom-end">
        {({ TransitionProps }) => (
          <ClickAwayListener
            onClickAway={() => {
              popupState.close();
            }}
          >
            <Grow in={popupState.isOpen} {...TransitionProps}>
              <Paper className={classes.paper}>
                <List className={classes.list}>
                  {loading ? (
                    <div className={classes.loading}>
                      <CircularProgress size={32} />
                    </div>
                  ) : messageList && messageList.length ? (
                    messageList.map((message, index) => (
                      <React.Fragment key={message.id}>
                        <ListItem alignItems="flex-start" className={classes.listItem}>
                          <Typography gutterBottom>{message.title}</Typography>
                          <Typography gutterBottom variant="body2">
                            <span id="notification-message" dangerouslySetInnerHTML={{ __html: message.text || '' }} />
                          </Typography>
                          {message.date && (
                            <Typography variant="caption" color="textSecondary">
                              {new Date(message.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                              })}
                            </Typography>
                          )}
                        </ListItem>
                        {index < messageList.length - 1 ? <Divider className={classes.divider} /> : null}
                      </React.Fragment>
                    ))
                  ) : (
                    <Typography variant="body1" align="center" className={classes.empty}>
                      <span>No notifications</span>
                    </Typography>
                  )}
                </List>
              </Paper>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </NoSsr>
  );
};
