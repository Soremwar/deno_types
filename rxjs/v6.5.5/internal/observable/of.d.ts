import { SchedulerLike, ValueFromArray } from '../types.d.ts';
import { Observable } from '../Observable.d.ts';
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([], scheduler)` */
export declare function of(scheduler: SchedulerLike): Observable<never>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T>(a: T, scheduler: SchedulerLike): Observable<T>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2>(a: T, b: T2, scheduler: SchedulerLike): Observable<T | T2>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2, T3>(a: T, b: T2, c: T3, scheduler: SchedulerLike): Observable<T | T2 | T3>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2, T3, T4>(a: T, b: T2, c: T3, d: T4, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2, T3, T4, T5>(a: T, b: T2, c: T3, d: T4, e: T5, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2, T3, T4, T5, T6>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2, T3, T4, T5, T6, T7>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6 | T7>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2, T3, T4, T5, T6, T7, T8>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8>;
/** @deprecated remove in v8. Use {@link scheduled} instead `scheduled([a, b, c], scheduler)` */
export declare function of<T, T2, T3, T4, T5, T6, T7, T8, T9>(a: T, b: T2, c: T3, d: T4, e: T5, f: T6, g: T7, h: T8, i: T9, scheduler: SchedulerLike): Observable<T | T2 | T3 | T4 | T5 | T6 | T7 | T8 | T9>;
export declare function of(): Observable<never>;
/** @deprecated remove in v8. Do not use generic arguments directly, allow inference or cast with `as` */
export declare function of<T>(): Observable<T>;
export declare function of<T>(value: T): Observable<T>;
export declare function of<T, U>(value1: T, value2: U): Observable<T | U>;
export declare function of<T, U, V>(value1: T, value2: U, value3: V): Observable<T | U | V>;
export declare function of<A extends Array<any>>(...args: A): Observable<ValueFromArray<A>>;
