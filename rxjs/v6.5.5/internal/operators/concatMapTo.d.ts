import {
  ObservableInput,
  OperatorFunction,
  ObservedValueOf,
} from "../types.d.ts";
export declare function concatMapTo<O extends ObservableInput<any>>(
  observable: O,
): OperatorFunction<any, ObservedValueOf<O>>;
/** @deprecated */
export declare function concatMapTo<O extends ObservableInput<any>>(
  observable: O,
  resultSelector: undefined,
): OperatorFunction<any, ObservedValueOf<O>>;
/** @deprecated */
export declare function concatMapTo<T, R, O extends ObservableInput<any>>(
  observable: O,
  resultSelector: (
    outerValue: T,
    innerValue: ObservedValueOf<O>,
    outerIndex: number,
    innerIndex: number,
  ) => R,
): OperatorFunction<T, R>;
