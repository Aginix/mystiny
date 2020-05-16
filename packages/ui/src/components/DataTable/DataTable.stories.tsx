import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AppTheme } from '@mystiny/theme';
import React, { Fragment, useEffect } from 'react';
import DataTable from './DataTable';
import { action } from '@storybook/addon-actions';
import { Column } from 'react-table';
import { BooleanFilter, TextFilter } from './Filters';

export default {
  title: 'DataTable',
  component: DataTable,
};

export const Default = () => {
  const useWithBulkActionsStyles = makeStyles((theme: AppTheme) => ({
    approve: {
      color: theme.palette.success.main,
    },
    reject: {
      color: theme.palette.error.main,
    },
  }));

  const classes = useWithBulkActionsStyles();

  const columns: Column[] = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        Filter: TextFilter,
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Active',
        accessor: 'active',
        Filter: BooleanFilter,
      },
    ],
    [],
  );

  const data = React.useMemo(
    () => [
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: true,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: true,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: false,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: false,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: true,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: false,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: false,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
        active: true,
      },
    ],
    [],
  );

  return (
    <DataTable
      columns={columns}
      data={data}
      totalCount={data.length}
      options={{}}
      onStateChange={(state) => {
        action('onStateChange')(state.filters);
      }}
      actions={
        <Fragment>
          <Button color="primary" variant="contained" size="small" onClick={(e) => action('Create button clicked')(e)}>
            Create
          </Button>
          <Button color="secondary" variant="outlined" size="small" onClick={(e) => action('Upload button clicked')(e)}>
            Upload
          </Button>
          <Button color="default" variant="outlined" size="small" onClick={(e) => action('Import button clicked')(e)}>
            Import
          </Button>
          <a href="https://www.google.co.th/" target="_blank">
            <Button color="default" variant="text" size="small" onClick={(e) => action('Google button clicked')(e)}>
              Google
            </Button>
          </a>
        </Fragment>
      }
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
              onClick={(e) => {
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

export const Loading = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
    ],
    [],
  );

  const data = React.useMemo(
    () => [
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
      {
        firstName: 'Nonpawit',
        lastName: 'Teerachetmongkol',
        age: 25,
      },
    ],
    [],
  );

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return <DataTable columns={columns} data={data} totalCount={data.length} loading={loading} />;
};
