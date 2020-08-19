import { Observable } from "../Observable.d.ts";
import {
  ObservableInput,
  SchedulerLike,
  ObservedValueOf,
  ObservedValueUnionFromArray,
} from "../types.d.ts";
/** @deprecated remove in v8. Passing a scheduler to concat is deprecated, please use {@link scheduled} and {@link concatAll} `scheduled([o1, o2], scheduler).pipe(concatAll())` */
export declare function concat<O1 extends ObservableInput<any>>(
  v1: O1,
  scheduler: SchedulerLike,
): Observable<ObservedValueOf<O1>>;
/** @deprecated remove in v8. Passing a scheduler to concat is deprecated, please use {@link scheduled} and {@link concatAll} `scheduled([o1, o2], scheduler).pipe(concatAll())` */
export declare function concat<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
>(
  v1: O1,
  v2: O2,
  scheduler: SchedulerLike,
): Observable<ObservedValueOf<O1> | ObservedValueOf<O2>>;
/** @deprecated remove in v8. Passing a scheduler to concat is deprecated, please use {@link scheduled} and {@link concatAll} `scheduled([o1, o2], scheduler).pipe(concatAll())` */
export declare function concat<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
>(
  v1: O1,
  v2: O2,
  v3: O3,
  scheduler: SchedulerLike,
): Observable<ObservedValueOf<O1> | ObservedValueOf<O2> | ObservedValueOf<O3>>;
/** @deprecated remove in v8. Passing a scheduler to concat is deprecated, please use {@link scheduled} and {@link concatAll} `scheduled([o1, o2], scheduler).pipe(concatAll())` */
export declare function concat<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  scheduler: SchedulerLike,
): Observable<
  | ObservedValueOf<O1>
  | ObservedValueOf<O2>
  | ObservedValueOf<O3>
  | ObservedValueOf<O4>
>;
/** @deprecated remove in v8. Passing a scheduler to concat is deprecated, please use {@link scheduled} and {@link concatAll} `scheduled([o1, o2], scheduler).pipe(concatAll())` */
export declare function concat<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  scheduler: SchedulerLike,
): Observable<
  | ObservedValueOf<O1>
  | ObservedValueOf<O2>
  | ObservedValueOf<O3>
  | ObservedValueOf<O4>
  | ObservedValueOf<O5>
>;
/** @deprecated remove in v8. Passing a scheduler to concat is deprecated, please use {@link scheduled} and {@link concatAll} `scheduled([o1, o2], scheduler).pipe(concatAll())` */
export declare function concat<
  O1 extends ObservableInput<any>,
  O2 extends ObservableInput<any>,
  O3 extends ObservableInput<any>,
  O4 extends ObservableInput<any>,
  O5 extends ObservableInput<any>,
  O6 extends ObservableInput<any>,
>(
  v1: O1,
  v2: O2,
  v3: O3,
  v4: O4,
  v5: O5,
  v6: O6,
  scheduler: SchedulerLike,
): Observable<
  | ObservedValueOf<O1>
  | ObservedValueOf<O2>
  | ObservedValueOf<O3>
  | ObservedValueOf<O4>
  | ObservedValueOf<O5>
  | ObservedValueOf<O6>
>;
export declare function concat<A extends ObservableInput<any>[]>(
  ...observables: A
): Observable<ObservedValueUnionFromArray<A>>;
