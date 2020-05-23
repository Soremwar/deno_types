import { MonoTypeOperatorFunction, OperatorFunction, SchedulerLike, ValueFromArray } from '../types.d.ts';
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export declare function startWith<T>(scheduler: SchedulerLike): MonoTypeOperatorFunction<T>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export declare function startWith<T, D>(v1: D, scheduler: SchedulerLike): OperatorFunction<T, T | D>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export declare function startWith<T, D, E>(v1: D, v2: E, scheduler: SchedulerLike): OperatorFunction<T, T | D | E>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export declare function startWith<T, D, E, F>(v1: D, v2: E, v3: F, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export declare function startWith<T, D, E, F, G>(v1: D, v2: E, v3: F, v4: G, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F | G>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export declare function startWith<T, D, E, F, G, H>(v1: D, v2: E, v3: F, v4: G, v5: H, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F | G | H>;
/** @deprecated use {@link scheduled} and {@link concatAll} (e.g. `scheduled([[a, b, c], source], scheduler).pipe(concatAll())`) */
export declare function startWith<T, D, E, F, G, H, I>(v1: D, v2: E, v3: F, v4: G, v5: H, v6: I, scheduler: SchedulerLike): OperatorFunction<T, T | D | E | F | G | H | I>;
export declare function startWith<T, A extends any[] = T[]>(...values: A): OperatorFunction<T, T | ValueFromArray<A>>;
