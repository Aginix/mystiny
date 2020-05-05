import React, { createContext, useContext } from 'react';
import { FieldValues, FormContextValues } from 'react-hook-form';
import { DevTool } from 'react-hook-form-devtools';
import PageBackdrop from '~/components/PageBackdrop';

export const FormContext = createContext<Partial<FormContextValues>>(null as any);

export interface Props {
  form: FormContextValues<FieldValues>;
  loading?: boolean;
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>;
}

export const Form: React.FC<Props> = ({ children, onSubmit, form, loading }) => {
  const { control } = form;

  return (
    <FormContext.Provider value={form}>
      <form onSubmit={onSubmit}>
        {children}
        <DevTool control={control} />
      </form>
      <PageBackdrop open={loading} />
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('Cannot get FormContext');
  }

  return context as FormContextValues<FieldValues>;
};

export default Form;
