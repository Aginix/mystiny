import {
  Button,
  Grid,
  Paper,
  Typography,
  FormControl,
  FormControlLabel,
  InputLabel,
  FormHelperText,
  MenuItem,
} from '@material-ui/core';
import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import Form from './Form';
import TextField from './TextField';
import Select from './Select';
import Switch from './Switch';

export default {
  title: 'Form (React Hook Form)',
  decorators: [(storyFn: any) => <div style={{ margin: 8 }}>{storyFn()}</div>],
};

export const Default = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm();

  const handleSubmit = form.handleSubmit((data: any) => {
    setLoading(true);
    action('submit')(data);
    console.log('[Submit]', data);

    setInterval(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <Paper style={{ padding: 8 }}>
      <Typography variant="h5" gutterBottom>
        Form
      </Typography>
      <Form form={form} onSubmit={handleSubmit} loading={loading}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <TextField id="firstName" name="firstName" label="firstName" />
          </Grid>
          <Grid item md={6}>
            <TextField id="lastName" name="lastName" label="lastName" />
          </Grid>
          <Grid item md={6}>
            <FormControl>
              <TextField
                id="email"
                name="email"
                type="email"
                label="email"
                RHFInputProps={{ rules: { required: true } }}
              />
              <FormHelperText id="my-helper-text">We&apos;ll never share your email.</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item md={6} />
          <Grid item md={6}>
            <TextField id="address" name="address" type="address" label="Address" multiline rows={3} />
          </Grid>
          <Grid item md={6} />
          <Grid item md={6}>
            <InputLabel id="age" required>
              Age
            </InputLabel>
            <Select labelId="age" id="age" value="20" name="age" RHFInputProps={{ rules: { required: true } }}>
              <MenuItem value="10">Ten</MenuItem>
              <MenuItem value="20">Twenty</MenuItem>
            </Select>
          </Grid>
          <Grid item md={6}>
            <FormControlLabel control={<Switch name="active" value="true" />} label="Active" />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Paper>
  );
};
