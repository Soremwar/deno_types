import { MonoTypeOperatorFunction } from '../types.d.ts';
/**
 * Returns an Observable that skips the first `count` items emitted by the source Observable.
 *
 * ![](skip.png)
 *
 * @param {Number} count - The number of times, items emitted by source Observable should be skipped.
 * @return {Observable} An Observable that skips values emitted by the source Observable.
 * @name skip
 */
export declare function skip<T>(count: number): MonoTypeOperatorFunction<T>;
