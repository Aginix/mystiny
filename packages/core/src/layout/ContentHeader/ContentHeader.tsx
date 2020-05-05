import React, { ComponentType, Fragment, FC } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Title from '../Title';

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leftItemsBox: {
    flex: '1 1 auto',
    marginBottom: theme.spacing(1),
    minWidth: 0,
    overflow: 'visible',
  },
  rightItemsBox: {
    flex: '0 1 auto',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 0,
    overflow: 'visible',
  },
  description: {},
  title: {
    display: 'inline-flex',
  },
}));

type DefaultTitleProps = {
  title?: string;
  className: string;
};

const DefaultTitle: FC<DefaultTitleProps> = ({ title = 'Unknown page', className }) => (
  <Typography variant="h4" className={className} data-testid="header-title">
    {title}
  </Typography>
);

type ContentHeaderProps = {
  title?: DefaultTitleProps['title'];
  titleComponent?: ComponentType;
  description?: string;
};

const ContentHeader: FC<ContentHeaderProps> = ({
  description,
  title,
  titleComponent: TitleComponent = undefined,
  children,
}) => {
  const classes = useStyles();

  const renderedTitle = TitleComponent ? <TitleComponent /> : <DefaultTitle title={title} className={classes.title} />;

  return (
    <Fragment>
      <Title title={title} />
      <div className={classes.container}>
        <div className={classes.leftItemsBox}>
          {renderedTitle}
          {description && (
            <Typography className={classes.description} variant="body2">
              {description}
            </Typography>
          )}
        </div>
        <div className={classes.rightItemsBox}>{children}</div>
      </div>
    </Fragment>
  );
};

export default ContentHeader;
