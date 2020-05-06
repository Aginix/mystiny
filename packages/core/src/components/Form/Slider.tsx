import { Slider as MuiSlider } from '@material-ui/core';
import { SliderProps as MuiSliderProps } from '@material-ui/core/Slider';
import React from 'react';
import { RHFInput } from 'react-hook-form-input';

import { useFormContext } from './Form';
import { RHFInputProps } from './Props';

export interface SliderProps extends MuiSliderProps {
  name: string;
  RHFInputProps?: Partial<RHFInputProps>;
}

const Slider = ({ name, RHFInputProps, ...rest }: SliderProps) => {
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
      as={<MuiSlider {...rest} />}
    />
  );
};

export default Slider;
