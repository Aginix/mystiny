import React, { FC } from 'react';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  item: {
    flex: `1 1 10rem`,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: `calc(100% - ${theme.spacing(2)}px)`,
  },
}));

export interface FormLayoutItemProps {}

export const FormLayoutItem: FC<FormLayoutItemProps> = ({ children }) => {
  const classes = useStyles({});
  return <div className={clsx(classes.item, 'item')}>{children}</div>;
};
