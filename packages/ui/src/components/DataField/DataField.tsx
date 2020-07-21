import React, { Fragment, FC } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  stringContent: {
    fontSize: '18px',
  },
}));

export interface DataFieldProps {
  label: string;
}

const DataField: FC<DataFieldProps> = ({ label, children }) => {
  const classes = useStyles();
  let content: React.ReactNode = children;

  if (typeof children === 'string') {
    content = (
      <Typography variant="h6" className={classes.stringContent} gutterBottom>
        {children}
      </Typography>
    );
  }

  return (
    <Fragment>
      <Typography color="textSecondary" variant="subtitle1">
        {label}
      </Typography>
      {content}
    </Fragment>
  );
};

export default DataField;
