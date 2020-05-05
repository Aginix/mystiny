import React from 'react';
import { Checkbox } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    padding: '4px 7px',
  },
}));

interface Props {
  indeterminate?: React.Ref<any>;
}

const IndeterminateCheckbox = React.forwardRef<HTMLInputElement, Props>(({ indeterminate, ...rest }, ref) => {
  const classes = useStyles();
  const defaultRef = React.useRef<any>();
  const resolvedRef = ref || defaultRef;

  React.useEffect(() => {
    (resolvedRef as any).current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return (
    <Checkbox
      size="small"
      color="primary"
      classes={{ root: classes.root }}
      ref={resolvedRef as React.MutableRefObject<any>}
      {...rest}
    />
  );
});

IndeterminateCheckbox.displayName = 'SelectBox';

export default IndeterminateCheckbox;
