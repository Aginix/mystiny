import { EventFunction, ValidationOptions } from 'react-hook-form-input/dist/types';

export type RHFInputProps = {
  children?: React.ReactNode;
  innerProps?: any;
  setValue?: (name: string, value: any, trigger?: boolean) => void;
  register?: (ref: any, rules: ValidationOptions) => (name: string) => void;
  unregister?: (name: string) => void;
  name: string;
  as: React.ElementType<any> | React.FunctionComponent<any> | string | any;
  type?: string;
  rules?: ValidationOptions;
  value?: string | boolean;
  onChange?: (value: any) => void;
  onBlur?: (value: any) => void;
  mode?: 'onBlur' | 'onChange' | 'onSubmit';
  defaultValue?: string;
  defaultChecked?: boolean;
  onChangeName?: string;
  onChangeEvent?: EventFunction;
  onBlurName?: string;
  onBlurEvent?: EventFunction;
};
