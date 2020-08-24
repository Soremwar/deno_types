import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface TableBodyTypeMap<P = {}, D extends React.ElementType = 'tbody'> {
  props: P;
  defaultComponent: D;
  classKey: TableBodyClassKey;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableBody API](https://material-ui.com/api/table-body/)
 */
declare const TableBody: OverridableComponent<TableBodyTypeMap>;

export type TableBodyClassKey = 'root';

export type TableBodyProps<
  D extends React.ElementType = TableBodyTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableBodyTypeMap<P, D>, D>;

export default TableBody;
