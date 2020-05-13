import React from 'react';
import SettingsIcon, { TextField } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { FormLayout } from './FormLayout';
import { FormLayoutGroup } from './FormLayoutGroup';

export default {
  title: 'FormLayout',
};

export const defaultLayout = () => (
  <FormLayout>
    <TextField className="item" label="Width" fullWidth />
    <TextField label="Height" fullWidth />
  </FormLayout>
);
