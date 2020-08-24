import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';

export interface DialogTitleProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, DialogTitleClassKey> {
  /**
   * If `true`, the children won't be wrapped by a typography component.
   * For instance, this can be useful to render an h4 instead of the default h2.
   */
  disableTypography?: boolean;
}

export type DialogTitleClassKey = 'root';

/**
 *
 * Demos:
 *
 * - [Dialogs](https://material-ui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogTitle API](https://material-ui.com/api/dialog-title/)
 */
export default function DialogTitle(props: DialogTitleProps): JSX.Element;
