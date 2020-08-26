import { Omit } from "../../../types/v5.1.0/index.d.ts";
import {
  CreateCSSProperties,
  StyledComponentProps,
  WithStylesOptions,
} from "./withStyles.d.ts";
import React from "../../../../react/v16.13.1/react.d.ts";
import { DefaultTheme } from "./defaultTheme.d.ts";

/**
 * @internal
 */
export type ComponentCreator<Component extends React.ElementType> = <
  Theme = DefaultTheme,
  Props extends {} = {},
>(
  styles:
    | CreateCSSProperties<Props>
    | ((props: { theme: Theme } & Props) => CreateCSSProperties<Props>),
  options?: WithStylesOptions<Theme>,
) => React.ComponentType<
  & Omit<
    JSX.LibraryManagedAttributes<Component, React.ComponentProps<Component>>,
    "classes" | "className"
  >
  & StyledComponentProps<"root">
  & { className?: string }
  & (Props extends { theme: Theme } ? Omit<Props, "theme"> & { theme?: Theme }
    : Props)
>;

export interface StyledProps {
  className: string;
}

export default function styled<Component extends React.ElementType>(
  Component: Component,
): ComponentCreator<Component>;
