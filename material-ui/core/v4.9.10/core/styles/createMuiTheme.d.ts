import { Breakpoints, BreakpointsOptions } from './createBreakpoints.d.ts';
import { Mixins, MixinsOptions } from './createMixins.d.ts';
import { Palette, PaletteOptions } from './createPalette.d.ts';
import { Typography, TypographyOptions } from './createTypography.d.ts';
import { Shadows } from './shadows.d.ts';
import { Shape, ShapeOptions } from './shape.d.ts';
import { Spacing, SpacingOptions } from './createSpacing.d.ts';
import { Transitions, TransitionsOptions } from './transitions.d.ts';
import { ZIndex, ZIndexOptions } from './zIndex.d.ts';
import { Overrides } from './overrides.d.ts';
import { ComponentsProps } from './props.d.ts';

export type Direction = 'ltr' | 'rtl';

export interface ThemeOptions {
  shape?: ShapeOptions;
  breakpoints?: BreakpointsOptions;
  direction?: Direction;
  mixins?: MixinsOptions;
  overrides?: Overrides;
  palette?: PaletteOptions;
  props?: ComponentsProps;
  shadows?: Shadows;
  spacing?: SpacingOptions;
  transitions?: TransitionsOptions;
  typography?: TypographyOptions | ((palette: Palette) => TypographyOptions);
  zIndex?: ZIndexOptions;
}

export interface Theme {
  shape: Shape;
  breakpoints: Breakpoints;
  direction: Direction;
  mixins: Mixins;
  overrides?: Overrides;
  palette: Palette;
  props?: ComponentsProps;
  shadows: Shadows;
  spacing: Spacing;
  transitions: Transitions;
  typography: Typography;
  zIndex: ZIndex;
}

export default function createMuiTheme(options?: ThemeOptions, ...args: object[]): Theme;
