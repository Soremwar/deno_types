import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';

export interface CardActionsProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, CardActionsClassKey> {
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

export type CardActionsClassKey = 'root' | 'spacing';

/**
 *
 * Demos:
 *
 * - [Cards](https://material-ui.com/components/cards/)
 *
 * API:
 *
 * - [CardActions API](https://material-ui.com/api/card-actions/)
 */
export default function CardActions(props: CardActionsProps): JSX.Element;
