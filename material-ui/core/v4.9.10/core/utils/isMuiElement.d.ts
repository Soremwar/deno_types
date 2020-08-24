import * as React from '../../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../../core.d.ts';

export type NamedMuiComponent = React.ComponentType & { muiName: string };

export interface NamedMuiElement {
  type: NamedMuiComponent;
  props: StandardProps<{}, never>;
  key: string | number | null;
}

export default function isMuiElement(element: any, muiNames: string[]): element is NamedMuiElement;
