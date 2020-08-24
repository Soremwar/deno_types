import * as React from '../../../../react/v16.13.1/react.d.ts';
import { Omit } from '../core.d.ts';
import { TransitionProps } from './transition.d.ts';

export interface FadeProps extends Omit<TransitionProps, 'children'> {
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
 * The Fade transition is used by the [Modal](https://material-ui.com/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 * Demos:
 *
 * - [Transitions](https://material-ui.com/components/transitions/)
 *
 * API:
 *
 * - [Fade API](https://material-ui.com/api/fade/)
 * - inherits [Transition API](https://reactcommunity.org/react-transition-group/transition#Transition-props)
 */
export default function Fade(props: FadeProps): JSX.Element;
