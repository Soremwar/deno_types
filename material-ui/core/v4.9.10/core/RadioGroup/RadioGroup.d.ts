import * as React from '../../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../../core.d.ts';
import { FormGroupProps, FormGroupClassKey } from '../FormGroup.d.ts';

export interface RadioGroupProps
  extends StandardProps<FormGroupProps, RadioGroupClassKey, 'onChange'> {
  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue?: FormGroupProps['defaultValue'];
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name?: string;
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value?: any;
}

export type RadioGroupClassKey = FormGroupClassKey;

/**
 *
 * Demos:
 *
 * - [Radio Buttons](https://material-ui.com/components/radio-buttons/)
 *
 * API:
 *
 * - [RadioGroup API](https://material-ui.com/api/radio-group/)
 * - inherits [FormGroup API](https://material-ui.com/api/form-group/)
 */
export default function RadioGroup(props: RadioGroupProps): JSX.Element;
