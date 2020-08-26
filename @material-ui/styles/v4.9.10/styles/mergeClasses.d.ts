import {
  ElementType,
} from "../../../../react/v16.13.1/react.d.ts";

export interface Classes {
  [k: string]: string;
}

export interface MergeClassesOption {
  baseClasses: Classes;
  newClasses: Classes;
  Component: ElementType;
}

export default function mergeClasses(options?: MergeClassesOption): Classes;
