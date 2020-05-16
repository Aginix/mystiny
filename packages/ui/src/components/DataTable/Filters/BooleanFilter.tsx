import React from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { HeaderProps } from 'react-table';

export const BooleanFilter = ({ column: { Header, filterValue, setFilter, id } }: HeaderProps<object>) => {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={filterValue === 'true'}
          onChange={(event) => setFilter(String(event.target.checked))}
          name={id}
          color="primary"
        />
      }
      label={Header}
    />
  );
};
