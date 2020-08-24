import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';
import { InputBaseProps } from './InputBase.d.ts';

export interface InputProps extends StandardProps<InputBaseProps, InputClassKey> {
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline?: boolean;
}

export type InputClassKey =
  | 'root'
  | 'formControl'
  | 'focused'
  | 'disabled'
  | 'colorSecondary'
  | 'underline'
  | 'error'
  | 'marginDense'
  | 'multiline'
  | 'fullWidth'
  | 'input'
  | 'inputMarginDense'
  | 'inputMultiline'
  | 'inputTypeSearch';

/**
 *
 * Demos:
 *
 * - [Text Fields](https://material-ui.com/components/text-fields/)
 *
 * API:
 *
 * - [Input API](https://material-ui.com/api/input/)
 * - inherits [InputBase API](https://material-ui.com/api/input-base/)
 */
export default function Input(props: InputProps): JSX.Element;
