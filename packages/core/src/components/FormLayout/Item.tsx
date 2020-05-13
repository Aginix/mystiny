import React from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  item: {
    flex: `1 1 22rem`,
    marginTop: theme.spacing(),
    marginLeft: theme.spacing(4),
    maxWidth: `calc(100% - ${theme.spacing(2)}px)`,
  },
}));

export interface ItemProps {
  children?: React.ReactNode;
}

export function Item(props: ItemProps) {
  const classes = useStyles({});
  return <div className={clsx(classes.item, 'item')}>{props.children}</div>;
}