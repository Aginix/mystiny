import { action } from '@storybook/addon-actions';
import React, { Fragment, useState } from 'react';

import DataTableFilters from './DataTableFilters';
import { Button } from '@material-ui/core';

export default {
  title: 'DataTableFilters',
  component: DataTableFilters,
};

export const Default = () => {
  return <DataTableFilters />;
};
