import React from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

type Props = {
  open: boolean;
};

const PageBackdrop = ({ open }: Props) => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default PageBackdrop;
