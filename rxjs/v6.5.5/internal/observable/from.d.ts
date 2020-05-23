import { Observable } from '../Observable.d.ts';
import { ObservableInput, SchedulerLike, ObservedValueOf } from '../types.d.ts';
export declare function from<O extends ObservableInput<any>>(input: O): Observable<ObservedValueOf<O>>;
/** @deprecated use {@link scheduled} instead. */
export declare function from<O extends ObservableInput<any>>(input: O, scheduler: SchedulerLike): Observable<ObservedValueOf<O>>;
