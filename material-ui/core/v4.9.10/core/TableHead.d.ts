import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface TableHeadTypeMap<P = {}, D extends React.ElementType = 'thead'> {
  props: P;
  defaultComponent: D;
  classKey: TableHeadClassKey;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableHead API](https://material-ui.com/api/table-head/)
 */
declare const TableHead: OverridableComponent<TableHeadTypeMap>;

export type TableHeadClassKey = 'root';

export type TableHeadProps<
  D extends React.ElementType = TableHeadTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableHeadTypeMap<P, D>, D>;

export default TableHead;
