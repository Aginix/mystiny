import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { CheckboxProps as MuiCheckboxProps } from '@material-ui/core/Checkbox';
import React from 'react';
import { RHFInput } from 'react-hook-form-input';

import { useFormContext } from './Form';
import { RHFInputProps } from './Props';

export interface CheckboxProps extends MuiCheckboxProps {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
}

const Checkbox = ({ name, RHFInputProps, ...rest }: CheckboxProps) => {
  const { register, setValue } = useFormContext();

  function handleChange([_, value]: [any, any]) {
    return value;
  }

  return (
    <RHFInput
      {...RHFInputProps}
      type="checkbox"
      name={name}
      value={name}
      register={register}
      setValue={setValue}
      onChangeEvent={handleChange}
      as={<MuiCheckbox {...rest} />}
    />
  );
};

export default Checkbox;
