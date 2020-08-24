import { ButtonBaseTypeMap, ExtendButtonBase, ExtendButtonBaseTypeMap } from './ButtonBase.d.ts';
import { OverrideProps } from '../OverridableComponent.d.ts';

export type CardActionAreaTypeMap<P, D extends React.ElementType> = ExtendButtonBaseTypeMap<{
  props: P & {
    focusVisibleClassName?: string;
  };
  defaultComponent: D;
  classKey: CardActionAreaClassKey;
}>;

/**
 *
 * Demos:
 *
 * - [Cards](https://material-ui.com/components/cards/)
 *
 * API:
 *
 * - [CardActionArea API](https://material-ui.com/api/card-action-area/)
 * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
 */
declare const CardActionArea: ExtendButtonBase<CardActionAreaTypeMap<
  {},
  ButtonBaseTypeMap['defaultComponent']
>>;

export type CardActionAreaClassKey = 'root' | 'focusVisible' | 'focusHighlight';

export type CardActionAreaProps<
  D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<CardActionAreaTypeMap<P, D>, D>;

export default CardActionArea;
