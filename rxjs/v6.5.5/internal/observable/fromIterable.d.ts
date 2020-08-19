import { Observable } from "../Observable.d.ts";
import { SchedulerLike } from "../types.d.ts";
export declare function fromIterable<T>(
  input: Iterable<T>,
  scheduler?: SchedulerLike,
): Observable<T>;
