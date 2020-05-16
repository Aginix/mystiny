import { RadioGroup as MuiRadioGroup } from '@material-ui/core';
import { RadioGroupProps as MuiRadioGroupProps } from '@material-ui/core/RadioGroup';
import React from 'react';
import { RHFInput } from 'react-hook-form-input';

import { useFormContext } from './Form';
import { RHFInputProps } from './Props';

export interface RadioGroupProps extends MuiRadioGroupProps {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
}

const RadioGroup = ({ name, RHFInputProps, ...rest }: RadioGroupProps) => {
  const { register, setValue } = useFormContext();

  function handleChange([_, value]: [any, any]) {
    return value;
  }

  return (
    <RHFInput
      {...RHFInputProps}
      name={name}
      value={name}
      register={register}
      setValue={setValue}
      onChangeEvent={handleChange}
      as={<MuiRadioGroup aria-label={name} name={name} {...rest} />}
    />
  );
};

export default RadioGroup;
