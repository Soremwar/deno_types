import * as React from '../../../../react/v16.13.1/react.d.ts';
import { OverridableComponent, OverrideProps } from '../OverridableComponent.d.ts';

export interface CardMediaTypeMap<P, D extends React.ElementType> {
  props: P & {
    image?: string;
    src?: string;
  };
  defaultComponent: D;
  classKey: CardMediaClassKey;
}

/**
 *
 * Demos:
 *
 * - [Cards](https://material-ui.com/components/cards/)
 *
 * API:
 *
 * - [CardMedia API](https://material-ui.com/api/card-media/)
 */
declare const CardMedia: OverridableComponent<CardMediaTypeMap<{}, 'div'>>;

export type CardMediaClassKey = 'root' | 'media';

export type CardMediaProps<D extends React.ElementType = 'div', P = {}> = OverrideProps<
  CardMediaTypeMap<P, D>,
  D
>;

export default CardMedia;
