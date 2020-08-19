import {
  MonoTypeOperatorFunction,
  SchedulerLike,
  OperatorFunction,
  ValueFromArray,
} from "../types.d.ts";
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export declare function endWith<T>(
  scheduler: SchedulerLike,
): MonoTypeOperatorFunction<T>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export declare function endWith<T, A>(
  v1: A,
  scheduler: SchedulerLike,
): OperatorFunction<T, T | A>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export declare function endWith<T, A, B>(
  v1: A,
  v2: B,
  scheduler: SchedulerLike,
): OperatorFunction<T, T | A | B>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export declare function endWith<T, A, B, C>(
  v1: A,
  v2: B,
  v3: C,
  scheduler: SchedulerLike,
): OperatorFunction<T, T | A | B | C>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export declare function endWith<T, A, B, C, D>(
  v1: A,
  v2: B,
  v3: C,
  v4: D,
  scheduler: SchedulerLike,
): OperatorFunction<T, T | A | B | C | D>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export declare function endWith<T, A, B, C, D, E>(
  v1: A,
  v2: B,
  v3: C,
  v4: D,
  v5: E,
  scheduler: SchedulerLike,
): OperatorFunction<T, T | A | B | C | D | E>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([source, [a, b, c]], scheduler).pipe(concatAll())`) */
export declare function endWith<T, A, B, C, D, E, F>(
  v1: A,
  v2: B,
  v3: C,
  v4: D,
  v5: E,
  v6: F,
  scheduler: SchedulerLike,
): OperatorFunction<T, T | A | B | C | D | E | F>;
export declare function endWith<T, A extends any[] = T[]>(
  ...args: A
): OperatorFunction<T, T | ValueFromArray<A>>;
