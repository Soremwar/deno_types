import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';

export interface ExpansionPanelDetailsProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ExpansionPanelDetailsClassKey> {
  /**
   * The content of the expansion panel details.
   */
  children?: React.ReactNode;
}

export type ExpansionPanelDetailsClassKey = 'root';

/**
 *
 * Demos:
 *
 * - [Expansion Panels](https://material-ui.com/components/expansion-panels/)
 *
 * API:
 *
 * - [ExpansionPanelDetails API](https://material-ui.com/api/expansion-panel-details/)
 */
export default function ExpansionPanelDetails(props: ExpansionPanelDetailsProps): JSX.Element;
