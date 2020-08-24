import { Theme as DefaultTheme } from './createMuiTheme.d.ts';
import { ClassNameMap, Styles, WithStylesOptions } from '@material-ui/styles/withStyles';

import { Omit } from '../../../../types/v5.1.0/index.d.ts';

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
