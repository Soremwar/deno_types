import * as React from '../../../../react/v16.13.1/react.d.ts';
import { PropTypes } from '../core.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface IconTypeMap<P = {}, D extends React.ElementType = 'span'> {
  props: P & {
    color?: PropTypes.Color | 'action' | 'disabled' | 'error';
    fontSize?: 'inherit' | 'default' | 'small' | 'large';
  };
  defaultComponent: D;
  classKey: IconClassKey;
}
/**
 *
 * Demos:
 *
 * - [Icons](https://material-ui.com/components/icons/)
 * - [Material Icons](https://material-ui.com/components/material-icons/)
 *
 * API:
 *
 * - [Icon API](https://material-ui.com/api/icon/)
 */
declare const Icon: OverridableComponent<IconTypeMap>;

export type IconClassKey =
  | 'root'
  | 'colorSecondary'
  | 'colorAction'
  | 'colorDisabled'
  | 'colorError'
  | 'colorPrimary'
  | 'fontSizeInherit'
  | 'fontSizeSmall'
  | 'fontSizeLarge';

export type IconProps<
  D extends React.ElementType = IconTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<IconTypeMap<P, D>, D>;

export default Icon;
