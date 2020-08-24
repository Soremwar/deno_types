import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface TableRowTypeMap<P = {}, D extends React.ElementType = 'tr'> {
  props: P & {
    hover?: boolean;
    selected?: boolean;
  };
  defaultComponent: D;
  classKey: TableRowClassKey;
}
/**
 * Will automatically set dynamic row height
 * based on the material table element parent (head, body, etc).
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableRow API](https://material-ui.com/api/table-row/)
 */
declare const TableRow: OverridableComponent<TableRowTypeMap>;

export type TableRowClassKey = 'root' | 'selected' | 'hover' | 'head' | 'footer';

export type TableRowProps<
  D extends React.ElementType = TableRowTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableRowTypeMap<P, D>, D>;

export default TableRow;
