import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { isElementOfType, wrapWithComponent } from '../../utilities';
import FormLayoutGroup from './FormLayoutGroup';
import { FormLayoutItem } from './FormLayoutItem';

const useStyles = makeStyles((theme) => ({
  formLayout: {
    marginTop: -1 * theme.spacing(0),
    marginLeft: -1 * theme.spacing(4),
  },
}));

const FormLayout: FC<{}> = ({ children }) => {
  const classes = useStyles({});
  return <div className={classes.formLayout}>{React.Children.map(children as any, wrapChildren)}</div>;
};

function wrapChildren(child: React.ReactElement<{}>, index: number) {
  if (isElementOfType(child, FormLayoutGroup)) {
    return child;
  }
  const props = { key: index };
  return wrapWithComponent(child, FormLayoutItem, props);
}

export default FormLayout;
