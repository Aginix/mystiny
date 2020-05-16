import { ReactNode } from 'react';
import { TableState as ReactTableState, ColumnInstance, Filters } from 'react-table';

export interface DataTableOptions {
  selection?: boolean;
  search?: boolean;
}

export interface TableState {
  search?: string;
  sortBy: ReactTableState['sortBy'];
  pageIndex: ReactTableState['pageIndex'];
  pageSize: ReactTableState['pageSize'];
  filters: ReactTableState['filters'];
  globalFilter: ReactTableState['globalFilter'];
  hiddenColumns: ReactTableState['hiddenColumns'];
}

export interface DataTableProps {
  columns?: any[];
  data?: any[];
  totalCount?: number;
  pageCount?: number;
  page?: number;
  loading?: boolean;
  onStateChange?: (state: TableState) => void;
  title?: string;
  options?: DataTableOptions;
  actions?: DataTableToolbarProps['actions'];
  bulkActions?: DataTableToolbarProps['bulkActions'];
}

export interface DataTableToolbarBulkAction {
  tooltip?: ReactNode;
  icon?: ReactNode;
  render?: (props: { data: any[]; disabled?: boolean; hidden?: boolean }) => JSX.Element;
  label?: string;
  onClick?: <T = any>(event: React.MouseEvent<HTMLButtonElement, MouseEvent>, data: T[]) => void | any;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
}

export interface DataTableToolbarProps {
  title?: string;
  numSelected?: number;
  preGlobalFilteredRows?: any[];
  actions?: ReactNode;
  bulkActions?: DataTableToolbarBulkAction[];
  search?: string;
  setSearch?: (search: string | undefined) => void;
  columns?: DataTableFiltersProps['columns'];
  filters?: DataTableFiltersProps['filters'];
}

export interface DataTableFiltersProps {
  filters?: Filters<object>;
  search?: string;
  setSearch?: (value: string | undefined) => void;
  columns?: ColumnInstance<object>[];
}

export interface DataTablePaginationActionsProps {
  count: number;
  onChangePage: (event: any, page: number) => void;
  page: number;
  rowsPerPage: number;
}
