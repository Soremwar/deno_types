import * as React from '../../../../react/v16.13.1/react.d.ts';
import { ExtendButtonBase, ExtendButtonBaseTypeMap } from './ButtonBase.d.ts';
import { IconButtonProps } from './IconButton.d.ts';
import { OverrideProps } from '../OverridableComponent.d.ts';

export type ExpansionPanelSummaryTypeMap<
  P = {},
  D extends React.ElementType = 'div'
> = ExtendButtonBaseTypeMap<{
  props: P & {
    expandIcon?: React.ReactNode;
    IconButtonProps?: Partial<IconButtonProps>;
  };
  defaultComponent: D;
  classKey: ExpansionPanelSummaryClassKey;
}>;

/**
 *
 * Demos:
 *
 * - [Expansion Panels](https://material-ui.com/components/expansion-panels/)
 *
 * API:
 *
 * - [ExpansionPanelSummary API](https://material-ui.com/api/expansion-panel-summary/)
 * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
 */
declare const ExpansionPanelSummary: ExtendButtonBase<ExpansionPanelSummaryTypeMap>;

export type ExpansionPanelSummaryClassKey =
  | 'root'
  | 'expanded'
  | 'focused'
  | 'disabled'
  | 'content'
  | 'expandIcon';

export type ExpansionPanelSummaryProps<
  D extends React.ElementType = ExpansionPanelSummaryTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ExpansionPanelSummaryTypeMap<P, D>, D>;

export default ExpansionPanelSummary;
