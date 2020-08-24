import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';

export interface ExpansionPanelActionsProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ExpansionPanelActionsClassKey> {
  /**
   * If `true`, the actions do not have additional margin.
   */
  disableSpacing?: boolean;
}

export type ExpansionPanelActionsClassKey = 'root' | 'spacing';

/**
 *
 * Demos:
 *
 * - [Expansion Panels](https://material-ui.com/components/expansion-panels/)
 *
 * API:
 *
 * - [ExpansionPanelActions API](https://material-ui.com/api/expansion-panel-actions/)
 */
export default function ExpansionPanelActions(props: ExpansionPanelActionsProps): JSX.Element;
