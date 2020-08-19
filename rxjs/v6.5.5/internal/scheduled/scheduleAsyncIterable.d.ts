import { SchedulerLike } from "../types.d.ts";
import { Observable } from "../Observable.d.ts";
export declare function scheduleAsyncIterable<T>(
  input: AsyncIterable<T>,
  scheduler: SchedulerLike,
): Observable<T>;
