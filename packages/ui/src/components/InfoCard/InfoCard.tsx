import React, { FC, ReactNode } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  withStyles,
  makeStyles,
  Toolbar,
} from '@material-ui/core';
import classNames from 'classnames';
import ErrorBoundary from '../ErrorBoundary';
import BottomLink, { BottomLinkProps } from '../BottomLink';
import { CardProps } from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(1, 2, 1, 0),
  },
  noPadding: {
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: { minHeight: 56 },
  },
}));

const BoldHeader = withStyles(() => ({
  title: { fontWeight: 400, fontSize: '1.2rem' },
  subheader: {},
}))(CardHeader);

const CardActionsTopRight = withStyles(() => ({
  root: {
    display: 'inline-block',
    padding: 16,
    float: 'right',
  },
}))(CardActions);

const VARIANT_STYLES = {
  card: {
    flex: {
      display: 'flex',
      flexDirection: 'column',
    },
    fullHeight: {
      height: '100%',
    },
    height100: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100% - 10px)', // for pages without content header
      marginBottom: '10px',
    },
    contentheader: {
      height: 'calc(100% - 40px)', // for pages with content header
    },
    contentheadertabs: {
      height: 'calc(100% - 97px)', // for pages with content header and tabs (Tingle)
    },
    noShrink: {
      flexShrink: 0,
    },
    minheight300: {
      minHeight: 300,
      overflow: 'initial',
    },
  },
  cardContent: {
    fullHeight: {
      height: 'calc(100% - 50px)',
    },
    height100: {
      height: 'calc(100% - 50px)',
    },
    contentRow: {
      display: 'flex',
      flexDirection: 'row',
    },
  },
};

/**
 * InfoCard is used to display a paper-styled block on the screen, similar to a panel.
 *
 * You can custom style an InfoCard with the 'style' (outer container) and 'cardStyle' (inner container)
 * styles.
 *
 * The InfoCard serves as an error boundary. As a result, if you provide a 'slackChannel' property this
 * specifies the channel to display in the error component that is displayed if an error occurs
 * in any descendent components.
 *
 * By default the InfoCard has no custom layout of its children, but is treated as a block element. A
 * couple common variants are provided and can be specified via the variant property:
 *
 * Display the card full height suitable for DataGrid:
 *
 *   <InfoCard variant="height100">...</InfoCard>
 *
 * Variants can be combined in a whitespace delimited list like so:
 *
 *   <InfoCard variant="noShrink">...</InfoCard>
 */
export type InfoCardProps = {
  title?: ReactNode;
  subheader?: ReactNode;
  divider?: boolean;
  deepLink?: BottomLinkProps;
  slackChannel?: string;
  variant?: string;
  style?: object;
  cardStyle?: object;
  children?: ReactNode;
  headerStyle?: object;
  headerProps?: object;
  actionsClassName?: string;
  actions?: ReactNode;
  cardClassName?: string;
  actionTopRight?: ReactNode;
  actionsTopRight?: ReactNode;
  className?: string;
  noPadding?: boolean;
  CardProps?: CardProps;
};

const InfoCard: FC<InfoCardProps> = ({
  title,
  subheader,
  divider,
  deepLink,
  slackChannel = '#mystiny',
  variant,
  children,
  headerStyle,
  headerProps,
  actionsClassName,
  actions,
  cardClassName,
  actionTopRight,
  actionsTopRight,
  className,
  noPadding,
  CardProps,
}) => {
  const classes = useStyles();

  /**
   * If variant is specified, we build up styles for that particular variant for both
   * the Card and the CardContent (since these need to be synced)
   */
  let calculatedStyle = {};
  let calculatedCardStyle = {};

  if (variant) {
    const variants = variant.split(/[\s]+/g);
    variants.forEach((name) => {
      calculatedStyle = {
        ...calculatedStyle,
        ...VARIANT_STYLES.card[name as keyof typeof VARIANT_STYLES['card']],
      };
      calculatedCardStyle = {
        ...calculatedCardStyle,
        ...VARIANT_STYLES.cardContent[name as keyof typeof VARIANT_STYLES['cardContent']],
      };
    });
  }

  return (
    <Card style={calculatedStyle} className={className} {...CardProps}>
      <ErrorBoundary slackChannel={slackChannel}>
        {title || actionTopRight ? (
          <Toolbar className={classes.toolbar}>
            {title ? (
              <BoldHeader
                className={classes.header}
                title={title}
                subheader={subheader}
                style={{ display: 'inline-block', ...headerStyle }}
                {...headerProps}
              />
            ) : null}
            {actionTopRight}
          </Toolbar>
        ) : null}
        <Divider />
        {actionsTopRight && <CardActionsTopRight>{actionsTopRight}</CardActionsTopRight>}
        {divider && <Divider />}
        <CardContent
          className={classNames(cardClassName, {
            [classes.noPadding]: noPadding,
          })}
          style={calculatedCardStyle}
        >
          {children}
        </CardContent>
        {actions && <CardActions className={actionsClassName}>{actions}</CardActions>}
        {deepLink && <BottomLink {...deepLink} />}
      </ErrorBoundary>
    </Card>
  );
};

export default InfoCard;
