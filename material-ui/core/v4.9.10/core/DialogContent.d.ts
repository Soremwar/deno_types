import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';

export interface DialogContentProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, DialogContentClassKey> {
  /**
   * Display the top and bottom dividers.
   */
  dividers?: boolean;
}

export type DialogContentClassKey = 'root' | 'dividers';

/**
 *
 * Demos:
 *
 * - [Dialogs](https://material-ui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogContent API](https://material-ui.com/api/dialog-content/)
 */
export default function DialogContent(props: DialogContentProps): JSX.Element;
