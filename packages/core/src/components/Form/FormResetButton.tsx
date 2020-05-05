import React, { useCallback } from 'react';
import LoadingButton from '../components/LoadingButton';
import { useFormContext } from './Form';

const FormResetButton = () => {
  const form = useFormContext();

  const handleClick = useCallback(() => {
    form!.reset!();
  }, [form]);

  return (
    <LoadingButton variant="contained" color="default" onClick={handleClick}>
      Reset
    </LoadingButton>
  );
};

export default FormResetButton;
