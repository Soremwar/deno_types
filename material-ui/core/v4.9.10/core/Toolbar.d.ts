import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface ToolbarTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    disableGutters?: boolean;
    variant?: 'regular' | 'dense';
  };
  defaultComponent: D;
  classKey: ToolbarClassKey;
}
/**
 *
 * Demos:
 *
 * - [App Bar](https://material-ui.com/components/app-bar/)
 *
 * API:
 *
 * - [Toolbar API](https://material-ui.com/api/toolbar/)
 */
declare const Toolbar: OverridableComponent<ToolbarTypeMap>;

export type ToolbarClassKey = 'root' | 'gutters' | 'regular' | 'dense';

export type ToolbarProps<
  D extends React.ElementType = ToolbarTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ToolbarTypeMap<P, D>, D>;

export default Toolbar;
