import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';

export interface DialogActionsProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, DialogActionsClassKey> {
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

export type DialogActionsClassKey = 'root' | 'spacing';

/**
 *
 * Demos:
 *
 * - [Dialogs](https://material-ui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogActions API](https://material-ui.com/api/dialog-actions/)
 */
export default function DialogActions(props: DialogActionsProps): JSX.Element;
