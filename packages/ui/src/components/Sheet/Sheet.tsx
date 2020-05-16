import React, { FC, ReactNode } from 'react';
import { Typography, Paper, PaperProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppTheme } from '@mystiny/theme';

const useStyles = makeStyles((theme: AppTheme) => ({
  root: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  title: {
    color: theme.palette.textContrast,
    fontWeight: 400,
    lineHeight: '1.0em',
    wordBreak: 'break-all',
    fontSize: `calc(${theme.typography.h6.fontSize}px + 6 * ((100vw - 320px) / 680))`,
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.0em',
  },
  content: {
    // padding: theme.spacing(2)
  },
  header: {
    minHeight: 68,
    width: '100%',
    position: 'relative',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  leftItemsBox: {
    flex: '1 1 auto',
  },
  rightItemsBox: {
    flex: '0 1 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
}));

type SheetHeaderStyles = ReturnType<typeof useStyles>;

export interface SheetProps extends Omit<PaperProps, 'title' | 'subtitle'> {
  subtitle?: ReactNode;
  title: ReactNode;
  toolbar?: ReactNode;
}

type TitleFragmentProps = {
  classes: SheetHeaderStyles;
  title: string | ReactNode;
};

type SubtitleFragmentProps = {
  classes: SheetHeaderStyles;
  subtitle?: SheetProps['subtitle'];
};

const TitleFragment: FC<TitleFragmentProps> = ({ title, classes }) => {
  return (
    <Typography className={classes.title} variant="h6">
      {title}
    </Typography>
  );
};

const SubtitleFragment: FC<SubtitleFragmentProps> = ({ classes, subtitle }) => {
  if (!subtitle) {
    return null;
  }

  if (typeof subtitle !== 'string') {
    return <>{subtitle}</>;
  }

  return (
    <Typography className={classes.subtitle} variant="subtitle1">
      {subtitle}
    </Typography>
  );
};

const Sheet: FC<SheetProps> = ({ children, title, subtitle, toolbar }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} square className={classes.root}>
      <div className={classes.header}>
        <div className={classes.leftItemsBox}>
          <TitleFragment classes={classes} title={title} />
          <SubtitleFragment classes={classes} subtitle={subtitle} />
        </div>
        <div className={classes.rightItemsBox}>{toolbar}</div>
      </div>
      <div className={classes.content}>{children}</div>
    </Paper>
  );
};

export default Sheet;
