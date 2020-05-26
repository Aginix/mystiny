import React, { FC } from 'react';
import clsx from 'clsx';
import { makeStyles, fade } from '@material-ui/core/styles';
import { FormLayoutItem } from '.';
import { wrapWithComponent, useUniqueId } from '../../utilities';
import { AppTheme } from '@mystiny/theme';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: AppTheme) => ({
  items: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    marginBottom: -1 * theme.spacing(),
    padding: `${theme.spacing()}px ${theme.spacing(4)}px 0`,
  },
  helpText: {
    color: fade(theme.palette.textContrast, 0.45),
    padding: `${theme.spacing(1.5)}px ${theme.spacing(4)}px 0`,
  },
  grouped: {
    '& .item': {
      minWidth: theme.spacing(4),
    },
  },
  condensed: {
    '& .item': {
      flexBasis: 0.5 * theme.spacing(4),
      minWidth: 0.5 * theme.spacing(4),
    },
  },
}));

export interface FormLayoutGroupProps {
  condensed?: boolean;
  title?: string;
  helpText?: React.ReactNode;
}

export const FormLayoutGroup: FC<FormLayoutGroupProps> = ({ title, condensed, helpText, children }) => {
  const classes = useStyles({});
  const className = clsx(condensed ? classes.condensed : classes.grouped);

  const id = useUniqueId('FormLayoutGroup');

  let helpTextElement: JSX.Element | null = null;
  let helpTextID: undefined | string;
  let titleElement: JSX.Element | null = null;
  let titleID: undefined | string;

  if (helpText) {
    helpTextID = `${id}HelpText`;
    helpTextElement = (
      <Typography variant="subtitle1" component="div" className={classes.helpText}>
        {helpText}
      </Typography>
    );
  }

  if (title) {
    titleID = `${id}Title`;
    titleElement = (
      <Typography variant="subtitle1" component="div" className={classes.title}>
        {title}
      </Typography>
    );
  }

  const itemsMarkup = React.Children.map(children, (child) => wrapWithComponent(child, FormLayoutItem, {}));

  return (
    <div role="group" className={className} aria-labelledby={titleID} aria-describedby={helpTextID}>
      {titleElement}
      <div className={classes.items}>{itemsMarkup}</div>
      {helpTextElement}
    </div>
  );
};

export default FormLayoutGroup;
