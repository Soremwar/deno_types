import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';
import { PaperProps } from './Paper.d.ts';
import { LinearProgressProps } from './LinearProgress.d.ts';

export interface MobileStepperProps
  extends StandardProps<PaperProps, MobileStepperClassKey, 'children' | 'variant'> {
  /**
   * Set the active step (zero based index).
   * Defines which dot is highlighted when the variant is 'dots'.
   */
  activeStep?: number;
  /**
   * A back button element. For instance, it can be a `Button` or an `IconButton`.
   */
  backButton: React.ReactNode;
  /**
   * Props applied to the `LinearProgress` element.
   */
  LinearProgressProps?: Partial<LinearProgressProps>;
  /**
   * A next button element. For instance, it can be a `Button` or an `IconButton`.
   */
  nextButton: React.ReactNode;
  /**
   * Set the positioning type.
   */
  position?: 'bottom' | 'top' | 'static';
  /**
   * The total steps.
   */
  steps: number;
  /**
   * The variant to use.
   */
  variant?: 'text' | 'dots' | 'progress';
}

export type MobileStepperClassKey =
  | 'root'
  | 'positionBottom'
  | 'positionTop'
  | 'positionStatic'
  | 'dots'
  | 'dot'
  | 'dotActive'
  | 'progress';

/**
 *
 * Demos:
 *
 * - [Steppers](https://material-ui.com/components/steppers/)
 *
 * API:
 *
 * - [MobileStepper API](https://material-ui.com/api/mobile-stepper/)
 * - inherits [Paper API](https://material-ui.com/api/paper/)
 */
export default function MobileStepper(props: MobileStepperProps): JSX.Element;
