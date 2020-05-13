import React from 'react';
import { TextField } from '@material-ui/core';
import { FormLayout } from './FormLayout';
import { FormLayoutGroup } from './FormLayoutGroup';

export default {
  title: 'FormLayout / Group',
};

export const twoColumns = () => (
  <FormLayout>
    <FormLayoutGroup title="Group Title" helpText="Help text.">
      <TextField className="item" label="Width" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const threeColumns = () => (
  <FormLayout>
    <FormLayoutGroup>
      <TextField className="item" label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const fourColumns = () => (
  <FormLayout>
    <FormLayoutGroup>
      <TextField className="item" label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const twoColumnsCondensed = () => (
  <FormLayout>
    <FormLayoutGroup condensed>
      <TextField className="item" label="Width" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const threeColumnsCondensed = () => (
  <FormLayout>
    <FormLayoutGroup condensed>
      <TextField className="item" label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);

export const fourColumnsCondensed = () => (
  <FormLayout>
    <FormLayoutGroup condensed>
      <TextField className="item" label="Width" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
      <TextField label="Height" fullWidth />
    </FormLayoutGroup>
  </FormLayout>
);
