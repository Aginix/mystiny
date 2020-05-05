import React, { Fragment, useState } from 'react';

import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { DataTableFiltersProps } from './types';
import { Tooltip, Button, Menu, MenuItem } from '@material-ui/core';
import { useAsyncDebounce } from 'react-table';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  filter: {},
}));

const DataTableFilters = ({ columns = [], filters, search, setSearch }: DataTableFiltersProps) => {
  const classes = useStyles();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const handleSearch = useAsyncDebounce((value: string | undefined) => setSearch!(value), 200);
  const selectedFiltersComponents = React.useMemo(
    () => columns.filter(column => selectedFilters.includes(column.id)).map(column => column.render('Filter')),
    [filters, columns, selectedFilters],
  );

  return (
    <Fragment>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          defaultValue={search}
          onChange={e => {
            if (setSearch) {
              handleSearch(e.target.value || undefined); // Set undefined to remove the filter entirely
            }
          }}
          placeholder={`Search records...`}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <div className={classes.filter}>{selectedFiltersComponents}</div>
      <div>
        <PopupState variant="popover" popupId="demo-popup-menu">
          {popupState => (
            <React.Fragment>
              <Tooltip title="Filter list">
                <Button aria-label="filter list" startIcon={<FilterListIcon />} {...bindTrigger(popupState)}>
                  Add Filter
                </Button>
              </Tooltip>
              <Menu {...bindMenu(popupState)}>
                {columns
                  .filter(column => !selectedFilters.includes(column.id) && column.canFilter && column.Filter)
                  .map(column => (
                    <MenuItem
                      key={column.id}
                      onClick={() => {
                        popupState.close();
                        setSelectedFilters(selectedFilters.concat(column.id as string));
                      }}
                    >
                      {column.Header}
                    </MenuItem>
                  ))}
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </div>
    </Fragment>
  );
};

export default DataTableFilters;
