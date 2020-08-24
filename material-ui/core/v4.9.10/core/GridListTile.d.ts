import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface GridListTileTypeMap<P = {}, D extends React.ElementType = 'li'> {
  props: P & {
    cols?: number;
    rows?: number;
  };
  defaultComponent: D;
  classKey: GridListTileClassKey;
}
/**
 *
 * Demos:
 *
 * - [Grid List](https://material-ui.com/components/grid-list/)
 *
 * API:
 *
 * - [GridListTile API](https://material-ui.com/api/grid-list-tile/)
 */
declare const GridListTile: OverridableComponent<GridListTileTypeMap>;

export type GridListTileClassKey = 'root' | 'tile' | 'imgFullHeight' | 'imgFullWidth';

export type GridListTileProps<
  D extends React.ElementType = GridListTileTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<GridListTileTypeMap<P, D>, D>;

export default GridListTile;
