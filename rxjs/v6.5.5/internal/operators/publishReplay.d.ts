import { Observable } from "../Observable.d.ts";
import {
  MonoTypeOperatorFunction,
  OperatorFunction,
  SchedulerLike,
  ObservableInput,
  ObservedValueOf,
} from "../types.d.ts";
export declare function publishReplay<T>(
  bufferSize?: number,
  windowTime?: number,
  scheduler?: SchedulerLike,
): MonoTypeOperatorFunction<T>;
export declare function publishReplay<T, O extends ObservableInput<any>>(
  bufferSize?: number,
  windowTime?: number,
  selector?: (shared: Observable<T>) => O,
  scheduler?: SchedulerLike,
): OperatorFunction<T, ObservedValueOf<O>>;
