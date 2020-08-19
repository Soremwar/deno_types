import { Observable } from "../Observable.d.ts";
import { SchedulerLike } from "../types.d.ts";
export declare function scheduleIterable<T>(
  input: Iterable<T>,
  scheduler: SchedulerLike,
): Observable<T>;
