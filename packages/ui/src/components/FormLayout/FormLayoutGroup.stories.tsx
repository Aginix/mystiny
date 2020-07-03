import React from 'react';
import { TextField, Divider } from '@material-ui/core';
import FormLayout from '.';
import { FormLayoutGroup } from './FormLayoutGroup';

export default {
  title: 'FormLayout / Group',
};

export const defaultForm = () => (
  <FormLayout>
    <FormLayoutGroup title="Group Title">
      <TextField size="small" label="Username" variant="outlined" fullWidth />
    </FormLayoutGroup>
    <Divider />
    <FormLayoutGroup title="Group Title" helpText="Help text.">
      <TextField size="small" label="Password" variant="outlined" fullWidth />
    </FormLayoutGroup>
    <FormLayoutGroup title="Group Title" helpText="Help text.">
      <TextField size="small" label="Width" variant="outlined" fullWidth />
      <TextField size="small" label="Height" variant="outlined" fullWidth />
      <TextField size="small" label="Height" variant="outlined" fullWidth />
    </FormLayoutGroup>
    <TextField size="small" label="Height" variant="outlined" fullWidth />
    <TextField size="small" label="Height" variant="outlined" fullWidth />
    <TextField size="small" label="Height" variant="outlined" fullWidth />
  </FormLayout>
);

export const twoColumns = () => (
  <FormLayout>
    <FormLayoutGroup title="Group Title" helpText="Help text.">
      <TextField label="Width" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const threeColumns = () => (
  <FormLayout>
    <FormLayoutGroup>
      <TextField label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const fourColumns = () => (
  <FormLayout>
    <FormLayoutGroup>
      <TextField label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const twoColumnsCondensed = () => (
  <FormLayout>
    <FormLayoutGroup condensed>
      <TextField label="Width" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const threeColumnsCondensed = () => (
  <FormLayout>
    <FormLayoutGroup condensed>
      <TextField label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const fourColumnsCondensed = () => (
  <FormLayout>
    <FormLayoutGroup condensed>
      <TextField label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);
