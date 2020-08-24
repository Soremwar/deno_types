import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';

export interface FormGroupProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, FormGroupClassKey> {
  /**
   * Display group of elements in a compact row.
   */
  row?: boolean;
}

export type FormGroupClassKey = 'root' | 'row';

/**
 * `FormGroup` wraps controls such as `Checkbox` and `Switch`.
 * It provides compact row layout.
 * For the `Radio`, you should be using the `RadioGroup` component instead of this one.
 * Demos:
 *
 * - [Checkboxes](https://material-ui.com/components/checkboxes/)
 * - [Switches](https://material-ui.com/components/switches/)
 *
 * API:
 *
 * - [FormGroup API](https://material-ui.com/api/form-group/)
 */
export default function FormGroup(props: FormGroupProps): JSX.Element;
