import { Breakpoint } from './styles/createBreakpoints.d.ts';
import { WithWidth } from '../withWidth.d.ts';
import { PropInjector } from '../../../types/v5.1.0/index.d.ts';

export interface WithMobileDialogOptions {
  breakpoint: Breakpoint;
}

export interface WithMobileDialog extends WithWidth {
  fullScreen: boolean;
}

/**
 * @deprecated
 */
export interface InjectedProps extends WithMobileDialog {}

export default function withMobileDialog<P = {}>(
  options?: WithMobileDialogOptions
): PropInjector<WithMobileDialog, Partial<WithMobileDialog>>;
