import { Breakpoint } from './styles/createBreakpoints.d.ts';
import { PropInjector } from '../../../types/v5.1.0/index.d.ts';

export interface WithWidthOptions {
  withTheme?: boolean;
  noSSR?: boolean;
  initialWidth?: Breakpoint;
  resizeInterval?: number;
}

export interface WithWidth {
  width: Breakpoint;
}

export interface WithWidthProps extends Partial<WithWidth> {
  innerRef?: React.Ref<any>;
}

export function isWidthDown(
  breakpoint: Breakpoint,
  screenWidth: Breakpoint,
  inclusive?: boolean
): boolean;

export function isWidthUp(
  breakpoint: Breakpoint,
  screenWidth: Breakpoint,
  inclusive?: boolean
): boolean;

export default function withWidth(
  options?: WithWidthOptions
): PropInjector<WithWidth, WithWidthProps>;
