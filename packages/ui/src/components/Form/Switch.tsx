import { Switch as MuiSwitch } from '@material-ui/core';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import React from 'react';
import { RHFInput } from 'react-hook-form-input';

import { useFormContext } from './Form';
import { RHFInputProps } from './Props';

export interface SwitchProps extends MuiSwitchProps {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
}

const Switch = ({ name, RHFInputProps, ...rest }: SwitchProps) => {
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
      as={<MuiSwitch {...rest} />}
    />
  );
};

export default Switch;
