import { Observable } from "../Observable.d.ts";
import { InteropObservable, SchedulerLike } from "../types.d.ts";
export declare function fromObservable<T>(
  input: InteropObservable<T>,
  scheduler?: SchedulerLike,
): Observable<T>;
