import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface TableContainerTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P;
  defaultComponent: D;
  classKey: TableContainerClassKey;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableContainer API](https://material-ui.com/api/table-container/)
 */
declare const TableContainer: OverridableComponent<TableContainerTypeMap>;

export type TableContainerClassKey = 'root';

export type TableContainerProps<
  D extends React.ElementType = TableContainerTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableContainerTypeMap<P, D>, D>;

export default TableContainer;
