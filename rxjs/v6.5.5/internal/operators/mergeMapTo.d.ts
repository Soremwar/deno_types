import { OperatorFunction, ObservedValueOf } from "../../internal/types.d.ts";
import { ObservableInput } from "../types.d.ts";
export declare function mergeMapTo<O extends ObservableInput<any>>(
  innerObservable: O,
  concurrent?: number,
): OperatorFunction<any, ObservedValueOf<O>>;
/** @deprecated */
export declare function mergeMapTo<T, R, O extends ObservableInput<any>>(
  innerObservable: O,
  resultSelector: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number,
  ) => R,
  concurrent?: number,
): OperatorFunction<T, R>;
