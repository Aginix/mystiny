import React, { useCallback, memo } from 'react';
import { HeaderProps } from 'react-table';
import { Select, MenuItem } from '@material-ui/core';

export interface SelectionFilterItem {
  label: string;
  value: string;
}

export interface SelectionFilterProps extends HeaderProps<object> {
  items?: SelectionFilterItem[];
}

export const SelectionFilter = memo(({ column: { setFilter, filterValue }, items = [] }: SelectionFilterProps) => {
  const handleChange = useCallback((value?: string) => setFilter(value), [setFilter]);

  return (
    <Select defaultValue={filterValue} onChange={e => handleChange((e.target.value as string) || undefined)}>
      {items.map(item => (
        <MenuItem value={item.value} key={item.label}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  );
});
