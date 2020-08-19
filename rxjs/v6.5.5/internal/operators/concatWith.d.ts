import {
  ObservableInput,
  OperatorFunction,
  ObservedValueUnionFromArray,
} from "../types.d.ts";
export declare function concatWith<T>(): OperatorFunction<T, T>;
export declare function concatWith<T, A extends ObservableInput<any>[]>(
  ...otherSources: A
): OperatorFunction<T, ObservedValueUnionFromArray<A> | T>;
