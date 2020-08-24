import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface ListSubheaderTypeMap<P = {}, D extends React.ElementType = 'li'> {
  props: P & {
    color?: 'default' | 'primary' | 'inherit';
    disableGutters?: boolean;
    disableSticky?: boolean;
    inset?: boolean;
  };
  defaultComponent: D;
  classKey: ListSubheaderClassKey;
}

/**
 *
 * Demos:
 *
 * - [Grid List](https://material-ui.com/components/grid-list/)
 * - [Lists](https://material-ui.com/components/lists/)
 *
 * API:
 *
 * - [ListSubheader API](https://material-ui.com/api/list-subheader/)
 */
declare const ListSubheader: OverridableComponent<ListSubheaderTypeMap>;

export type ListSubheaderClassKey =
  | 'root'
  | 'colorPrimary'
  | 'colorInherit'
  | 'inset'
  | 'sticky'
  | 'gutters';

export type ListSubheaderProps<
  D extends React.ElementType = ListSubheaderTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ListSubheaderTypeMap<P, D>, D>;

export default ListSubheader;
