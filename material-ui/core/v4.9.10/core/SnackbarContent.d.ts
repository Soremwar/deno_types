import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';
import { PaperProps } from './Paper.d.ts';

export interface SnackbarContentProps
  extends StandardProps<PaperProps, SnackbarContentClassKey, 'children'> {
  /**
   * The action to display. It renders after the message, at the end of the snackbar.
   */
  action?: React.ReactNode;
  /**
   * The message to display.
   */
  message?: React.ReactNode;
  /**
   * The ARIA role attribute of the element.
   */
  role?: PaperProps['role'];
}

export type SnackbarContentClassKey = 'root' | 'message' | 'action';

/**
 *
 * Demos:
 *
 * - [Snackbars](https://material-ui.com/components/snackbars/)
 *
 * API:
 *
 * - [SnackbarContent API](https://material-ui.com/api/snackbar-content/)
 * - inherits [Paper API](https://material-ui.com/api/paper/)
 */
export default function SnackbarContent(props: SnackbarContentProps): JSX.Element;
