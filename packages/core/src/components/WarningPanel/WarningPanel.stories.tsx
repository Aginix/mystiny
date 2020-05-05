import React from 'react';
import WarningPanel from './WarningPanel';
import { Link, Button } from '@material-ui/core';

export default {
  title: 'Warning Panel',
  component: WarningPanel,
};

export const Default = () => (
  <WarningPanel
    title="Example Warning Title"
    message={
      <>
        This example entity is missing something. If this is unexpected, please make sure you have set up everything
        correctly by following <Link href="http://example.com">this guide</Link>.
      </>
    }
  />
);

export const Children = () => (
  <WarningPanel title="Example Warning Title">
    <Button variant="outlined" color="primary">
      Supports custom children - for example this button
    </Button>
  </WarningPanel>
);
