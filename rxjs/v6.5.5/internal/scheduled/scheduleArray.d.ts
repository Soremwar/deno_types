import { Observable } from "../Observable.d.ts";
import { SchedulerLike } from "../types.d.ts";
export declare function scheduleArray<T>(
  input: ArrayLike<T>,
  scheduler: SchedulerLike,
): Observable<T>;
