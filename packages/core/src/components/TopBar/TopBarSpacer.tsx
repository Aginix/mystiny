import React, { FC, useState, memo } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const TopbarSpacer = () => {
  const classes = useStyles();
  return <div className={classes.toolbar} />;
};

export default TopbarSpacer;
