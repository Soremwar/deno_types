import { Observable } from "../Observable.d.ts";
import { SchedulerLike } from "../types.d.ts";
export declare function fromPromise<T>(
  input: PromiseLike<T>,
  scheduler?: SchedulerLike,
): Observable<T>;
