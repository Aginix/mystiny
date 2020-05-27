import React, { Fragment, ReactNode, CSSProperties, FC } from 'react';
import { Typography, Tooltip, makeStyles } from '@material-ui/core';
import { AppTheme } from '@mystiny/theme';

import { Theme } from '../Page/Page';
import Waves from './Waves';

const useStyles = makeStyles<AppTheme>((theme) => ({
  header: {
    gridArea: 'pageHeader',
    padding: theme.spacing(3),
    minHeight: 118,
    width: '100%',
    boxShadow: '0 0 8px 3px rgba(20, 20, 20, 0.3)',
    position: 'relative',
    zIndex: 100,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    marginRight: theme.spacing(6),
  },
  title: {
    color: theme.palette.bursts.fontColor,
    lineHeight: '1.0em',
    wordBreak: 'break-all',
    fontSize: 'calc(24px + 6 * ((100vw - 320px) / 680))',
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: '1.0em',
  },
  type: {
    textTransform: 'uppercase',
    fontSize: 9,
    opacity: 0.8,
    marginBottom: 10,
    color: theme.palette.bursts.fontColor,
  },
}));

type HeaderStyles = ReturnType<typeof useStyles>;

export interface HeaderProps {
  component?: ReactNode;
  pageTitleOverride?: string;
  style?: CSSProperties;
  subtitle?: ReactNode;
  title: ReactNode;
  tooltip?: string;
  type?: string;
  typeLink?: string;
}

type TypeFragmentProps = {
  classes: HeaderStyles;
  type?: HeaderProps['title'];
  typeLink?: HeaderProps['typeLink'];
};

type TitleFragmentProps = {
  classes: HeaderStyles;
  pageTitle: string | ReactNode;
  tooltip?: HeaderProps['tooltip'];
};

type SubtitleFragmentProps = {
  classes: HeaderStyles;
  subtitle?: HeaderProps['subtitle'];
};

const TypeFragment: FC<TypeFragmentProps> = ({ type, typeLink, classes }) => {
  if (!type) {
    return null;
  }

  if (!typeLink) {
    return (
      // </Link>
      <Typography className={classes.type}>{type}</Typography>
    );
  }

  return (
    // <Link to={typeLink}>
    <Typography className={classes.type}>{type}</Typography>
  );
};

const TitleFragment: FC<TitleFragmentProps> = ({ pageTitle, classes, tooltip }) => {
  const FinalTitle = (
    <Typography className={classes.title} variant="h4">
      {pageTitle}
    </Typography>
  );

  if (!tooltip) {
    return FinalTitle;
  }

  return (
    <Tooltip title={tooltip} placement="top-start">
      {FinalTitle}
    </Tooltip>
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

const Header: FC<HeaderProps> = ({ children, pageTitleOverride, style, subtitle, title, tooltip, type, typeLink }) => {
  const classes = useStyles();
  const documentTitle = pageTitleOverride || title;
  const pageTitle = title || pageTitleOverride;
  const defaultTitle = `${documentTitle} | Mystiny`;

  return (
    <Fragment>
      <Theme.Consumer>
        {(theme) => (
          <header style={style} className={classes.header}>
            <Waves theme={theme} />
            <div className={classes.leftItemsBox}>
              <TypeFragment classes={classes} type={type} typeLink={typeLink} />
              <TitleFragment classes={classes} pageTitle={pageTitle} tooltip={tooltip} />
              <SubtitleFragment classes={classes} subtitle={subtitle} />
            </div>
            <div className={classes.rightItemsBox}>{children}</div>
          </header>
        )}
      </Theme.Consumer>
    </Fragment>
  );
};

export default Header;
