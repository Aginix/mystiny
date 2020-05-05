import { Switch as MuiSwitch } from '@material-ui/core';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import React from 'react';
import { RHFInput } from 'react-hook-form-input';

import { useFormContext } from './Form';
import { RHFInputProps } from './Props';

export interface SwitchProps extends Partial<RHFInputProps> {
  name: string;
  SwitchProps?: MuiSwitchProps;
}

const Switch = ({ name, SwitchProps, ...rest }: SwitchProps) => {
  const { register, setValue } = useFormContext();

  function handleChange([_, value]: [any, any]) {
    return value;
  }

  return (
    <RHFInput
      {...rest}
      type="checkbox"
      name={name}
      value={name}
      register={register}
      setValue={setValue}
      onChangeEvent={handleChange}
      as={<MuiSwitch {...SwitchProps} />}
    />
  );
};

export default Switch;
