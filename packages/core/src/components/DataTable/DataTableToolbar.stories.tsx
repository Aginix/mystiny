import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from '@material-ui/core/styles';
import { AppTheme } from '@aginix/theme';
import { action } from '@storybook/addon-actions';
import React, { Fragment } from 'react';

import DataTableToolbar from './DataTableToolbar';
import { Button } from '@material-ui/core';

export default {
  title: 'DataTableToolbar',
  component: DataTableToolbar,
};

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];

export const Empty = () => <DataTableToolbar />;

export const Selected = () => <DataTableToolbar numSelected={data.length} />;

export const withActions = () => {
  return (
    <DataTableToolbar
      actions={
        <Fragment>
          <Button color="primary" variant="contained" size="small" onClick={e => action('Create button clicked')(e)}>
            Create
          </Button>
          <Button color="secondary" variant="outlined" size="small" onClick={e => action('Upload button clicked')(e)}>
            Upload
          </Button>
          <Button color="default" variant="outlined" size="small" onClick={e => action('Import button clicked')(e)}>
            Import
          </Button>
          <a href="https://www.google.co.th/" target="_blank">
            <Button color="default" variant="text" size="small" onClick={e => action('Google button clicked')(e)}>
              Google
            </Button>
          </a>
        </Fragment>
      }
    />
  );
};

export const withBulkActions = () => {
  const useWithBulkActionsStyles = makeStyles((theme: AppTheme) => ({
    approve: {
      color: theme.palette.success.main,
    },
    reject: {
      color: theme.palette.error.main,
    },
  }));

  const classes = useWithBulkActionsStyles();
  return (
    <DataTableToolbar
      preGlobalFilteredRows={data}
      numSelected={data.length}
      bulkActions={[
        {
          tooltip: 'Approve',
          label: 'Approve',
          className: classes.approve,
          icon: <ThumbUpIcon />,
          onClick: (e, data) => {
            action('Approve')(e, data);
          },
          // disabled: true
        },
        {
          tooltip: 'Reject',
          label: 'Approve',
          className: classes.reject,
          icon: <ThumbDownIcon />,
          onClick: (e, data) => {
            action('Reject')(e, data);
          },
        },
        {
          tooltip: 'Refresh',
          label: 'Refresh',
          icon: <RefreshIcon />,
          onClick: (e, data) => {
            action('Refresh')(e, data);
          },
        },
        {
          tooltip: 'Delete',
          render: ({ data }) => (
            <Button
              variant="text"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={e => {
                action('Delete')(e, data);
              }}
            >
              Delete
            </Button>
          ),
        },
      ]}
    />
  );
};
