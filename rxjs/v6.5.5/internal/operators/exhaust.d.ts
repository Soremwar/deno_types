import { ObservableInput, OperatorFunction } from "../types.d.ts";
export declare function exhaust<T>(): OperatorFunction<ObservableInput<T>, T>;
export declare function exhaust<R>(): OperatorFunction<any, R>;
