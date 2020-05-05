import React, { FC } from 'react';
import classNames from 'classnames';
import { Theme, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    gridArea: 'pageContent',
    minWidth: 0,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    ...theme.mixins.gutters({}),
  },
  stretch: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  noPadding: {
    padding: 0,
  },
}));

type Props = {
  stretch?: boolean;
  noPadding?: boolean;
  className?: string;
};

const Content: FC<Props> = ({ className, stretch, noPadding, children, ...props }) => {
  const classes = useStyles();
  return (
    <article
      {...props}
      className={classNames(classes.root, className, {
        [classes.stretch]: stretch,
        [classes.noPadding]: noPadding,
      })}
    >
      {children}
    </article>
  );
};

export default Content;
