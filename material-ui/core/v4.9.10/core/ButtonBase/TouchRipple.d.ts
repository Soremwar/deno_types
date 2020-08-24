import * as React from '../../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../../core.d.ts';

export type TouchRippleProps = StandardProps<
  React.HTMLAttributes<HTMLElement>,
  TouchRippleClassKey
> & {
  center?: boolean;
};

export type TouchRippleClassKey =
  | 'root'
  | 'ripple'
  | 'rippleVisible'
  | 'ripplePulsate'
  | 'child'
  | 'childLeaving'
  | 'childPulsate';

declare const TouchRipple: React.ComponentType<TouchRippleProps>;

export default TouchRipple;
