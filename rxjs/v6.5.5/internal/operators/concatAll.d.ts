import { OperatorFunction, ObservableInput } from '../types.d.ts';
export declare function concatAll<T>(): OperatorFunction<ObservableInput<T>, T>;
export declare function concatAll<R>(): OperatorFunction<any, R>;
