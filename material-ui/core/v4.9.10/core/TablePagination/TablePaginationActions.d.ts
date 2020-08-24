import * as React from '../../../../../react/v16.13.1/react.d.ts';
import { IconButtonProps } from '../IconButton.d.ts';

export interface TablePaginationActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  backIconButtonProps?: Partial<IconButtonProps>;
  count: number;
  nextIconButtonProps?: Partial<IconButtonProps>;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  page: number;
  rowsPerPage: number;
}

declare const TablePaginationActions: React.ComponentType<TablePaginationActionsProps>;

export default TablePaginationActions;
