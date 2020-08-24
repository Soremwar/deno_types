import * as React from '../../../../../react/v16.13.1/react.d.ts';

export interface NativeSelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  disabled?: boolean;
  IconComponent?: React.ElementType;
  inputRef?: React.Ref<HTMLSelectElement>;
  variant?: 'standard' | 'outlined' | 'filled';
}

declare const NativeSelectInput: React.ComponentType<NativeSelectInputProps>;

export default NativeSelectInput;
