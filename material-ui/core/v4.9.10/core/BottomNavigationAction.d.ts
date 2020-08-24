import * as React from '../../../../react/v16.13.1/react.d.ts';
import { ButtonBaseTypeMap, ExtendButtonBase, ExtendButtonBaseTypeMap } from './ButtonBase.d.ts';
import { OverrideProps } from '../OverridableComponent.d.ts';

export type BottomNavigationActionTypeMap<
  P,
  D extends React.ElementType
> = ExtendButtonBaseTypeMap<{
  props: P & {
    icon?: string | React.ReactElement;
    label?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
    onClick?: React.ReactEventHandler<any>;
    selected?: boolean;
    showLabel?: boolean;
    value?: any;
  };
  defaultComponent: D;
  classKey: BottomNavigationActionClassKey;
}>;

/**
 *
 * Demos:
 *
 * - [Bottom Navigation](https://material-ui.com/components/bottom-navigation/)
 *
 * API:
 *
 * - [BottomNavigationAction API](https://material-ui.com/api/bottom-navigation-action/)
 * - inherits [ButtonBase API](https://material-ui.com/api/button-base/)
 */
declare const BottomNavigationAction: ExtendButtonBase<BottomNavigationActionTypeMap<
  {},
  ButtonBaseTypeMap['defaultComponent']
>>;

export type BottomNavigationActionClassKey = 'root' | 'selected' | 'iconOnly' | 'wrapper' | 'label';

export type BottomNavigationActionProps<
  D extends React.ElementType = ButtonBaseTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<BottomNavigationActionTypeMap<P, D>, D>;

export default BottomNavigationAction;
