import { Observable } from '../Observable.d.ts';
import { MonoTypeOperatorFunction } from '../types.d.ts';
/** @deprecated In future versions, empty notifiers will no longer re-emit the source value on the output observable. */
export declare function delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<never>, subscriptionDelay?: Observable<any>): MonoTypeOperatorFunction<T>;
export declare function delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<any>, subscriptionDelay?: Observable<any>): MonoTypeOperatorFunction<T>;
