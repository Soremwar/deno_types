import * as React from '../../../../react/v16.13.1/react.d.ts';
import { TypographyTypeMap } from './Typography.d.ts';
import { OverrideProps, OverridableComponent } from '../OverridableComponent.d.ts';

export interface DialogContentTextTypeMap<
  P = {},
  D extends React.ElementType = TypographyTypeMap['defaultComponent']
> {
  props: P & TypographyTypeMap['props'];
  defaultComponent: D;
  classKey: DialogContentTextClassKey;
}

export type DialogContentTextClassKey = 'root';

/**
 *
 * Demos:
 *
 * - [Dialogs](https://material-ui.com/components/dialogs/)
 *
 * API:
 *
 * - [DialogContentText API](https://material-ui.com/api/dialog-content-text/)
 * - inherits [Typography API](https://material-ui.com/api/typography/)
 */
declare const DialogContentText: OverridableComponent<DialogContentTextTypeMap>;

export type DialogContentTextProps<
  D extends React.ElementType = DialogContentTextTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<DialogContentTextTypeMap<P, D>, D>;

export default DialogContentText;
