import {
  CircularProgress,
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
} from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import {
  TableOptions,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import DataTableToolbar from './DataTableToolbar';
import { useSelection } from './utilityHooks';

import DataTablePaginationActions from './DataTablePaginationActions';
import { DataTableProps } from './types';

const DEFAULT_OPTIONS: Partial<TableOptions<object>> = {
  manualSortBy: true,
  manualGlobalFilter: true,
  manualFilters: true,
  manualPagination: true,
};

const DataTable: FC<DataTableProps> = ({
  title,
  columns = [],
  data = [],
  loading,
  totalCount = 0,
  actions,
  onStateChange,
  bulkActions,
  options,
}) => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const tableOptions = onStateChange ? DEFAULT_OPTIONS : {};
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    gotoPage,
    setPageSize,
    prepareRow,
    page,
    columns: tableColumns,
    preGlobalFilteredRows,
    state: { sortBy, pageIndex, pageSize, filters, globalFilter, hiddenColumns, selectedRowIds },
  } = useTable(
    { columns, data, ...tableOptions },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    useSelection,
  );

  useEffect(() => {
    if (onStateChange) {
      onStateChange({ search, sortBy, pageIndex, pageSize, filters, globalFilter, hiddenColumns });
    }
  }, [search, sortBy, pageIndex, pageSize, filters, globalFilter, hiddenColumns]);

  const handleChangePage = (_: any, newPage: number) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setPageSize(Number(event.target.value));
  };

  const tableBodyRender = () =>
    page.map(row => {
      prepareRow(row);
      return (
        <TableRow key={row.id} {...row.getRowProps()}>
          {row.cells.map(cell => {
            return (
              <TableCell key={cell.value as string} {...cell.getCellProps()}>
                {cell.render('Cell')}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });

  return (
    <TableContainer component={Paper}>
      <DataTableToolbar
        title={title}
        numSelected={Object.keys(selectedRowIds).length}
        preGlobalFilteredRows={preGlobalFilteredRows}
        search={search}
        setSearch={setSearch}
        actions={actions}
        bulkActions={bulkActions}
        columns={tableColumns}
        filters={filters}
      />
      <MuiTable size="small" {...getTableProps()}>
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCell
                  key={column.id}
                  {...(column.id === 'selection'
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody {...getTableBodyProps()}>
          {loading ? (
            <tr>
              <td style={{ paddingTop: 32, paddingBottom: 32 }}>
                <div style={{ position: 'absolute', left: '50%', right: '50%' }}>
                  <CircularProgress color="primary" size="24px" />
                </div>
              </td>
            </tr>
          ) : (
            tableBodyRender()
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: totalCount }]}
              colSpan={4}
              count={totalCount}
              rowsPerPage={pageSize}
              page={pageIndex}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={DataTablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </MuiTable>
    </TableContainer>
  );
};

export default DataTable;
