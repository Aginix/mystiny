import React, { FC } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import { AppTheme } from '@mystiny/theme';
import ErrorOutline from '@material-ui/icons/ErrorOutline';

const useErrorOutlineStyles = makeStyles<AppTheme>((theme) => ({
  root: {
    marginRight: theme.spacing(1),
    fill: theme.palette.warningText,
  },
}));
const ErrorOutlineStyled = () => {
  const classes = useErrorOutlineStyles();
  return <ErrorOutline classes={classes} />;
};

const useStyles = makeStyles<AppTheme>((theme) => ({
  message: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1.5),
    backgroundColor: theme.palette.warningBackground,
    color: theme.palette.warningText,
    verticalAlign: 'middle',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(1),
  },
  headerText: {
    color: theme.palette.warningText,
  },
  messageText: {
    color: theme.palette.warningText,
  },
}));

/**
 * WarningPanel. Show a user friendly error message to a user similar to ErrorPanel except that the warning panel
 * only shows the warning message to the user
 */

type Props = {
  message?: React.ReactNode;
  title?: string;
};

export const WarningPanel: FC<Props> = (props) => {
  const classes = useStyles(props);
  const { title, message, children } = props;
  return (
    <div className={classes.message}>
      <div className={classes.header}>
        <ErrorOutlineStyled />
        <Typography className={classes.headerText} variant="subtitle1">
          {title}
        </Typography>
      </div>
      {message && <Typography className={classes.messageText}>{message}</Typography>}
      {children}
    </div>
  );
};

export default WarningPanel;
