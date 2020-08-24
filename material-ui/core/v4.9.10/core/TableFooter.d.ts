import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface TableFooterTypeMap<P = {}, D extends React.ElementType = 'tfoot'> {
  props: P;
  defaultComponent: D;
  classKey: TableFooterClassKey;
}
/**
 *
 * Demos:
 *
 * - [Tables](https://material-ui.com/components/tables/)
 *
 * API:
 *
 * - [TableFooter API](https://material-ui.com/api/table-footer/)
 */
declare const TableFooter: OverridableComponent<TableFooterTypeMap>;

export type TableFooterClassKey = 'root';

export type TableFooterProps<
  D extends React.ElementType = TableFooterTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<TableFooterTypeMap<P, D>, D>;

export default TableFooter;
