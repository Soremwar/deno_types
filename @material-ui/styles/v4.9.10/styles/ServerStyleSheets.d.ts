import {
  ReactElement,
  ReactNode,
} from "../../../../react/v16.13.1/react.d.ts";
import { StylesProviderProps } from "./StylesProvider.d.ts";

declare class ServerStyleSheets {
  constructor(options?: object);
  collect(
    children: ReactNode,
    options?: object,
  ): ReactElement<StylesProviderProps>;
  toString(): string;
  getStyleElement(props?: object): ReactElement;
}

export default ServerStyleSheets;
