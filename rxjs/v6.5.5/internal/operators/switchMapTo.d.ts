import { ObservableInput, OperatorFunction } from '../types.d.ts';
export declare function switchMapTo<R>(observable: ObservableInput<R>): OperatorFunction<any, R>;
/** @deprecated resultSelector is no longer supported. Switch to using switchMap with an inner map */
export declare function switchMapTo<R>(observable: ObservableInput<R>, resultSelector: undefined): OperatorFunction<any, R>;
/** @deprecated resultSelector is no longer supported. Switch to using switchMap with an inner map */
export declare function switchMapTo<T, I, R>(observable: ObservableInput<I>, resultSelector: (outerValue: T, innerValue: I, outerIndex: number, innerIndex: number) => R): OperatorFunction<T, R>;
