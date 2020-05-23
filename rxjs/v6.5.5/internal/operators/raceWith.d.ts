import { Observable } from '../Observable.d.ts';
import { MonoTypeOperatorFunction, OperatorFunction, ObservableInput, ObservedValueUnionFromArray } from '../types.d.ts';
/** @deprecated Deprecated use {@link raceWith} */
export declare function race<T>(observables: Array<Observable<T>>): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated use {@link raceWith} */
export declare function race<T, R>(observables: Array<Observable<T>>): OperatorFunction<T, R>;
/** @deprecated Deprecated use {@link raceWith} */
export declare function race<T>(...observables: Array<Observable<T> | Array<Observable<T>>>): MonoTypeOperatorFunction<T>;
/** @deprecated Deprecated use {@link raceWith} */
export declare function race<T, R>(...observables: Array<Observable<any> | Array<Observable<any>>>): OperatorFunction<T, R>;
/**
 * Creates an Observable that mirrors the first source Observable to emit a next,
 * error or complete notification from the combination of the Observable to which
 * the operator is applied and supplied Observables.
 *
 * ## Example
 *
 * ```ts
 * import { interval } from 'rxjs';
 * import { mapTo, raceWith } from 'rxjs/operators';
 *
 * const obs1 = interval(1000).pipe(mapTo('fast one'));
 * const obs2 = interval(3000).pipe(mapTo('medium one'));
 * const obs3 = interval(5000).pipe(mapTo('slow one'));
 *
 * obs2.pipe(
 *   raceWith(obs3, obs1)
 * ).subscribe(
 *   winner => console.log(winner)
 * );
 *
 * // Outputs
 * // a series of 'fast one'
 * ```
 *
 * @param otherSources Sources used to race for which Observable emits first.
 */
export declare function raceWith<T, A extends ObservableInput<any>[]>(...otherSources: A): OperatorFunction<T, T | ObservedValueUnionFromArray<A>>;
