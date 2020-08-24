import { Theme } from './createMuiTheme.d.ts';
import { Breakpoint } from './createBreakpoints.d.ts';
import { Variant } from './createTypography.d.ts';

export interface ResponsiveFontSizesOptions {
  breakpoints?: Breakpoint[];
  disableAlign?: boolean;
  factor?: number;
  variants?: Variant[];
}

export default function responsiveFontSizes(
  theme: Theme,
  options?: ResponsiveFontSizesOptions
): Theme;
