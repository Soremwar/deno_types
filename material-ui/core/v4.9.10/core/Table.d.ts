import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export type Padding = 'default' | 'checkbox' | 'none';

export type Size = 'small' | 'medium';

export interface TableTypeMap<P = {}, D extends React.ElementType = 'table'> {
  props: P & {
    padding?: Padding;
    size?: Size;
    stickyHeader?: boolean;
  };
  defaultComponent: D;
  classKey: TableClassKey;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [Table API](https://material-ui.com/api/table/)
 */
declare const Table: OverridableComponent<TableTypeMap>;

export type TableClassKey = 'root' | 'stickyHeader';

export type TableProps<
  D extends React.ElementType = TableTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableTypeMap<P, D>, D>;

export default Table;
