import { Select as MuiSelect } from '@material-ui/core';
import { SelectProps as MuiSelectProps } from '@material-ui/core/Select';
import React from 'react';
import { RHFInput } from 'react-hook-form-input';

import { useFormContext } from './Form';
import { RHFInputProps } from './Props';

export interface SelectProps extends MuiSelectProps {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
}

const Select = ({ name, RHFInputProps, ...rest }: SelectProps) => {
  const { register, setValue, errors } = useFormContext();
  return (
    <RHFInput
      {...RHFInputProps}
      name={name}
      defaultValue={rest.defaultValue as any}
      register={register}
      setValue={setValue}
      as={<MuiSelect fullWidth error={!!errors![name]} {...rest} />}
    />
  );
};

export default Select;
