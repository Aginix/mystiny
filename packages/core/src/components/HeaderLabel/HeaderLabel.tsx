import { Link, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'left',
    margin: theme.spacing(2),
    display: 'inline-block',
  },
  label: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    lineHeight: '16px',
    letterSpacing: 0,
    fontSize: 14,
    height: '16px',
    marginBottom: 2,
  },
  value: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '16px',
    fontSize: 14,
    height: '16px',
  },
}));

type HeaderLabelContentProps = {
  value: React.ReactNode;
  className: string;
};

const HeaderLabelContent: FC<HeaderLabelContentProps> = ({ value, className }) => (
  <Typography className={className}>{value}</Typography>
);

type HeaderLabelProps = {
  label: string;
  value?: HeaderLabelContentProps['value'];
  url?: string;
};

const HeaderLabel: FC<HeaderLabelProps> = ({ label, value, url }) => {
  const classes = useStyles();
  const content = <HeaderLabelContent className={classes.value} value={value || '<Unknown>'} />;
  return (
    <span className={classes.root}>
      <Typography className={classes.label}>{label}</Typography>
      {url ? <Link href={url}>{content}</Link> : content}
    </span>
  );
};

export default HeaderLabel;
