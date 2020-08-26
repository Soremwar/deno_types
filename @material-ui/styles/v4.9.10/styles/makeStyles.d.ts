import {
  ClassNameMap,
  Styles,
  WithStylesOptions,
} from './withStyles.d.ts';
import { Omit } from '../../../types/v5.1.0/index.d.ts';
import { DefaultTheme } from './defaultTheme.d.ts';

/**
 * `makeStyles` where the passed `styles` do not depend on props
 */
export default function makeStyles<Theme = DefaultTheme, ClassKey extends string = string>(
  style: Styles<Theme, {}, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (props?: any) => ClassNameMap<ClassKey>;
/**
 * `makeStyles` where the passed `styles` do depend on props
 */
export default function makeStyles<
  Theme = DefaultTheme,
  Props extends {} = {},
  ClassKey extends string = string
>(
  styles: Styles<Theme, Props, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>
): (props: Props) => ClassNameMap<ClassKey>;
