import * as React from '../../../../react/v16.13.1/react.d.ts';
import { TransitionProps } from './transition.d.ts';

export interface ZoomProps extends TransitionProps {
  /**
   * A single child content element.
   */
  children?: React.ReactElement<any, any>;
  /**
   * If `true`, the component will transition in.
   */
  in?: boolean;
  ref?: React.Ref<unknown>;
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout?: TransitionProps['timeout'];
}

/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](https://material-ui.com/components/buttons/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 * Demos:
 *
 * - [Transitions](https://material-ui.com/components/transitions/)
 *
 * API:
 *
 * - [Zoom API](https://material-ui.com/api/zoom/)
 * - inherits [Transition API](https://reactcommunity.org/react-transition-group/transition#Transition-props)
 */
export default function Zoom(props: ZoomProps): JSX.Element;
