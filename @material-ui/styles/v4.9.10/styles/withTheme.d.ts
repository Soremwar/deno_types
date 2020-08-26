import * as React from "../../../../react/v16.13.1/react.d.ts";
import {
  ConsistentWith,
  Omit,
  PropInjector,
} from "../../../types/v5.1.0/index.d.ts";
import { DefaultTheme } from "./defaultTheme.d.ts";

export interface WithThemeCreatorOption<Theme = DefaultTheme> {
  defaultTheme?: Theme;
}

export interface WithTheme<Theme = DefaultTheme> {
  theme: Theme;
  /**
   * Deprecated. Will be removed in v5. Refs are now automatically forwarded to
   * the inner component.
   * @deprecated since version 4.0
   */
  innerRef?: React.Ref<any>;
}

export interface ThemedComponentProps extends Partial<WithTheme> {
  ref?: React.Ref<unknown>;
}

export function withThemeCreator<Theme = DefaultTheme>(
  option?: WithThemeCreatorOption<Theme>,
): PropInjector<WithTheme<Theme>, ThemedComponentProps>;

export default function withTheme<
  Theme,
  C extends React.ComponentType<
    ConsistentWith<React.ComponentProps<C>, WithTheme<Theme>>
  >
>(
  component: C,
): React.ComponentType<
  & Omit<
    JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>,
    keyof WithTheme<Theme>
  >
  & Partial<WithTheme<Theme>>
  & ThemedComponentProps
>;
