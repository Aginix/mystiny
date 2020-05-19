import React from 'react';
import { TextField } from '@material-ui/core';
import FormLayout from './FormLayout';

export default {
  title: 'FormLayout',
};

export const defaultLayout = () => (
  <FormLayout>
    <TextField className="item" label="Width" fullWidth />
    <TextField label="Height" fullWidth />
  </FormLayout>
);
