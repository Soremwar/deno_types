import { Observable } from "../Observable.d.ts";
import { OperatorFunction, SchedulerLike } from "../types.d.ts";
export declare function windowTime<T>(
  windowTimeSpan: number,
  scheduler?: SchedulerLike,
): OperatorFunction<T, Observable<T>>;
export declare function windowTime<T>(
  windowTimeSpan: number,
  windowCreationInterval: number,
  scheduler?: SchedulerLike,
): OperatorFunction<T, Observable<T>>;
export declare function windowTime<T>(
  windowTimeSpan: number,
  windowCreationInterval: number,
  maxWindowSize: number,
  scheduler?: SchedulerLike,
): OperatorFunction<T, Observable<T>>;
