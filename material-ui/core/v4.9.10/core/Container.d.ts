import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface ContainerTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {
    disableGutters?: boolean;
    fixed?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  };
  defaultComponent: D;
  classKey: ContainerClassKey;
}
/**
 *
 * Demos:
 *
 * - [Container](https://material-ui.com/components/container/)
 *
 * API:
 *
 * - [Container API](https://material-ui.com/api/container/)
 */
declare const Container: OverridableComponent<ContainerTypeMap>;

export type ContainerClassKey =
  | 'root'
  | 'disableGutters'
  | 'fixed'
  | 'maxWidthXs'
  | 'maxWidthSm'
  | 'maxWidthMd'
  | 'maxWidthLg'
  | 'maxWidthXl';

export type ContainerProps<
  D extends React.ElementType = ContainerTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<ContainerTypeMap<P, D>, D>;

export default Container;
